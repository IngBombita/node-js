import "ts-jest";
import {ExampleService} from "../../../src/application/Services/ExampleService";
import {Example} from "../../../src/domain/Entities/Example";
import {InvalidArgumentError} from "../../../src/domain/Exceptions/InvalidArgumentError";
import {ExampleRepositoryStub} from "../../ExampleRepositoryStub";

describe('Example Service test suite', () => {

    // OJO, ESTA SUITE DE TEST NO ES LO IDEAL. Por detras esta testeando el metodo createInstance de la clase
    //    Example, lo que no esta correcto en un test unitario. Te propongo que edites esta suite para
    //    que sea unitaria.

    describe('create function tests: ', () => {
        test('Test create function with single string', async () => {
            let sut = new ExampleService(new ExampleRepositoryStub());
            let result = await sut.create('Juan');

            expect(result).toBeInstanceOf(Example);
            expect(result.name).toBe('Juan');
        });

        test('Test create function with empty string', async () => {
            let sut = new ExampleService(new ExampleRepositoryStub());

            await expect(sut.create(''))
                .rejects
                .toThrowError(InvalidArgumentError);
        });
    });
});