import { Injectable } from '@nestjs/common';
import { IProductRepository } from 'src/product/domain/ports/db.repository.interface';

@Injectable()
export class ProductRepository implements IProductRepository {
  async findProductById(id: number): Promise<any> {
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
