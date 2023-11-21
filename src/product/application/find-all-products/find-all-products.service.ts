import { Injectable } from '@nestjs/common';
import { IFindAllProductsUseCase } from 'src/product/domain/use-cases/use-cases.service.interface';

@Injectable()
export class FindAllProductsService implements IFindAllProductsUseCase {
  async findAllProducts(): Promise<any> {
  }
}
