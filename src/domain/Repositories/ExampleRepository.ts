import {Example} from "../Entities/Example";
import {injectable} from "inversify";

@injectable()
export interface ExampleRepository {
    findOneById(id: number): Promise<Example | undefined>;
    findAll(): Promise<Example[]>;
    save(example: Example): Promise<void>;
}