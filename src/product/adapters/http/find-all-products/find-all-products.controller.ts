import { Controller, Get } from '@nestjs/common';
import { FindAllProductsService } from 'src/product/application/find-all-products/find-all-products.service';
import { IFindAllProducts } from 'src/product/domain/ports/http.controller.interface';

@Controller('find-all-products')
export class FindAllProductsController implements IFindAllProducts {
  constructor(private findAllProductsService: FindAllProductsService) {}
  @Get()
  async findAllProducts(): Promise<any> {
    return await this.findAllProductsService.findAllProducts();
  }
}
