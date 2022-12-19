import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DataSource } from 'typeorm';
import { IProductRepository, ProductRepository } from './product.repository';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [ 
    {
        provide: 'PRODUCTS_REPOSITORY',
        useFactory: (dataSource: DataSource) => { return new ProductRepository(dataSource) },
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'PRODUCTS_SERVICE',
        useFactory: (productsRepo: IProductRepository) => { return new ProductService(productsRepo) },
        inject: ['PRODUCTS_REPOSITORY']
    },
    ProductResolver
  ],
  exports: [ProductResolver]
})
export class ProductModule {}
