import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/product/adapters/db/product.repository';
import { IFindProductByIdUseCase } from 'src/product/domain/use-cases/use-cases.service.interface';

@Injectable()
export class FindProductByIdService implements IFindProductByIdUseCase {
  constructor(private productRepository: ProductRepository) {}
  async findProductById(id: number): Promise<any> {
    return await this.productRepository.findProductById(id);
  }
}
