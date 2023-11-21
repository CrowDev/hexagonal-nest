import { Injectable } from '@nestjs/common';
import { IFindProductByIdUseCase } from 'src/product/domain/use-cases/use-cases.service.interface';

@Injectable()
export class FindProductByIdService implements IFindProductByIdUseCase {
  async findProductById(id: number): Promise<any> {
  }
}
