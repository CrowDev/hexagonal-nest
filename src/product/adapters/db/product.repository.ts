import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductRepository } from 'src/product/domain/ports/db.repository.interface';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
  ) {}

  async findProductById(id: number): Promise<any> {
    return await this.repository.findOneBy({ id });
  }

  async findAllProducts(): Promise<any> {
  }

  async createProduct(product: any): Promise<any> {
  }

  async updateProduct(id: number, product: any): Promise<any> {
  }

  async deleteProduct(id: number): Promise<any> {
  }
}
