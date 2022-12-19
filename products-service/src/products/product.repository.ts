import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { IProductCreate, Product } from "../entities/Product.entity";

export interface IProductRepository {
    getAll(): Promise<Product[]>
    updateProduct(id: number, productPayload: IProductCreate): Promise<Product>
}

@Injectable()
export class ProductRepository implements IProductRepository {
    constructor(
        @Inject('DATA_SOURCE') private readonly dataSource: DataSource
    ) {}

    public async getAll() {
        return this.dataSource.createQueryBuilder(Product, 'product')
            .getMany()
    } 

    public async updateProduct(id: number, productPayload: IProductCreate) {
        const product = await this.dataSource.createQueryBuilder(Product, 'product')
            .where('product.id = :id', { id })
            .getOneOrFail()

        product.title = productPayload.title
        await this.dataSource.manager.save(product)
        return product
    }
}