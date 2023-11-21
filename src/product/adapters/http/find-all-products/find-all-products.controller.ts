import { Controller, Get } from '@nestjs/common';
import { IFindAllProducts } from 'src/product/domain/ports/http.controller.interface';

@Controller('find-all-products')
export class FindAllProductsController implements IFindAllProducts {
  @Get()
  findAllProducts(): Promise<any> {
  }
}
