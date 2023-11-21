import { Controller, Get, Param } from '@nestjs/common';
import { FindProductByIdService } from 'src/product/application/find-product-by-id/find-product-by-id.service';
import { IFindProductById } from 'src/product/domain/ports/http.controller.interface';

@Controller('find-product-by-id')
export class FindProductByIdController implements IFindProductById {
  constructor(private findProductByIdService: FindProductByIdService) {}
  @Get(':id')
  async findProductById(@Param() id: number): Promise<any> {
    return await this.findProductByIdService.findProductById(id);
  }
}
