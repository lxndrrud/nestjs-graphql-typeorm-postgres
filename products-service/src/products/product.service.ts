import { Injectable } from "@nestjs/common";
import { IProductCreate, Product } from "src/entities/Product.entity";
import { IProductRepository } from "./product.repository";

export interface IProductService {
    getAll(): Promise<Product[]>
    updateProduct(id: number, productPayload: IProductCreate): Promise<Product>
}

@Injectable()
export class ProductService implements IProductService {
    constructor(
        private readonly productRepo: IProductRepository
    ) {}

    async getAll() {
        return await this.productRepo.getAll()
    }

    async updateProduct(id: number, productPayload: IProductCreate) {
        return await this.productRepo.updateProduct(id, productPayload)
    }
}