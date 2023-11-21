import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/product/adapters/db/product.repository';
import { IFindAllProductsUseCase } from 'src/product/domain/use-cases/use-cases.service.interface';

@Injectable()
export class FindAllProductsService implements IFindAllProductsUseCase {
  constructor(private productRepository: ProductRepository) {}
  async findAllProducts(): Promise<any> {
    return await this.productRepository.findAllProducts();
  }
}
