import {Connection, createConnection} from "typeorm";
import {Example} from "../../domain/Entities/Example";
import {Category} from "../../domain/Entities/Category";

export class SqliteConnection {
    public static async createConnection(): Promise<Connection> {
        return await createConnection({
            type: 'sqlite',
            database: ':memory:',
            dropSchema: true,
            synchronize: true,
            logging: true,
            entities: [Example, Category],
        });
    }
}
