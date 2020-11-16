import {Example} from "../../domain/Entities/Example";
import {ExampleRepository} from "../../domain/Repositories/ExampleRepository";
import {inject, injectable} from "inversify";
import TYPES from "../../types";

@injectable()
export class ExampleService {
    private exampleRepository: ExampleRepository;

    constructor(@inject(TYPES.ExampleRepository) exampleRepository: ExampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    public async create(name: string): Promise<Example> {
        const example: Example = new Example();
        example.name = name;

        await this.exampleRepository.save(example);

        return example;
    }
}