export class NewExampleMail {
    public static getBody(exampleName: string): string {
        return `<h2>Se ha creadp un nuevo ejemplo con el nombre ${exampleName}<h2/>`;
    }
}