export class InvalidArgumentError extends Error {
    constructor(message: string) {
        super();

        this.message = message;
    }
}