export interface IProductRepository {
  findProductById(id: number): Promise<any>;
  findAllProducts(): Promise<any>;
  createProduct(product: any): Promise<any>;
  updateProduct(id: number, product: any): Promise<any>;
  deleteProduct(id: number): Promise<any>;
}
