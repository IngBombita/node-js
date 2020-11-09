import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IExample} from "../../interfaces/example.interface";

@Entity()
export class Example extends BaseEntity implements IExample {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string = '';

}