import {ExampleRepository} from "../src/domain/Repositories/ExampleRepository";
import {Example} from "../src/domain/Entities/Example";

export class ExampleRepositoryStub implements ExampleRepository {
    findAll(): Promise<Example[]> {
        return Promise.resolve([
            Example.createInstance('Juan'),
            Example.createInstance('Juan1'),
            Example.createInstance('Juan2'),
            Example.createInstance('Juan3'),
        ]);
    }

    findOneById(id: number): Promise<Example | undefined> {
        return Promise.resolve(undefined);
    }

    save(example: Example): Promise<void> {
        return Promise.resolve(undefined);
    }

}