import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { IProductCreate, Product } from "../entities/Product.entity";
import { IProductService } from "./product.service";


@Resolver(of => Product)
export class ProductResolver {
    constructor(
        @Inject('PRODUCTS_SERVICE') private readonly productService: IProductService
    ) {}

    // Не может пропарсить возвращаемое значение функции автоматом, видимо из-за того,
    // что JS-compatible, а там это не сделать. Нужно указывать явно
    @Query(returns => [Product])
    async getAllProducts() {
        const products = await this.productService.getAll()
        return products
    }

    @Mutation(returns => Product || null)
    async updateProduct(
        @Args('id') id: number, 
        @Args('title') title: string
    ) {
        const productPayload: IProductCreate = {
            title
        }
        try {
            const product = await this.productService.updateProduct(id, productPayload)
            return product
        } catch (e) {
            // Написал, что не может null вернуть по запросу на { id, title }, пока не знаю, как пофиксить
            return null
        }
    }
}