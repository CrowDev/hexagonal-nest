import { Controller, Get, Param } from '@nestjs/common';
import { IFindProductById } from 'src/product/domain/ports/http.controller.interface';

@Controller('find-product-by-id')
export class FindProductByIdController implements IFindProductById {
  @Get(':id')
  async findProductById(@Param() id: number): Promise<any> {
  }
}
