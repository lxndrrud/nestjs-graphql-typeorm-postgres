import { Product } from "src/entities/Product.entity";
import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'pg-products',
                port: 5432,
                username: 'user',
                password: 'password',
                database: 'products',
                entities: [
                    Product,
                ],
                synchronize: false,
                logging: true,
            });

            return dataSource.initialize();
        },
    }
]
