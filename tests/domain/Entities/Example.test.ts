import {Example as sut} from "../../../src/domain/Entities/Example";
import "ts-jest";

describe('Example Entity test suite', () => {
    describe('createInstance function tests: ', () => {

        test('Test createInstance function with simple string', async () => {
            let result = sut.createInstance('Juan');

            expect(result).toBeInstanceOf(sut);
            expect(result.name).toBe('Juan');
        });

        test('Test createInstance function with empty string', () => {
            const method = () => {
                sut.createInstance('');
            };
            expect(method).toThrowError();
        });
    });
});