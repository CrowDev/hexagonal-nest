import { Get, Injectable } from '@nestjs/common';
import { IFindAllProducts } from 'src/product/domain/ports/http.controller.interface';

@Injectable()
export class FindAllProductsService implements IFindAllProducts {
  @Get()
  findAllProducts(): Promise<any> {
  }
}
