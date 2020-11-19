import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IExample} from "../../interfaces/example.interface";
import {Category} from "./Category";
import {InvalidArgumentError} from "../Exceptions/InvalidArgumentError";

@Entity()
export class Example extends BaseEntity implements IExample {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string = '';

    static createInstance = (name: string): Example => {
        if (name === '') {
            throw new InvalidArgumentError('The name of an Example cannot be empty');
        }

        const example: Example = new Example();
        example.name = name;
        return example;
    }

    @ManyToOne(() => Example)
    category: Category;
}