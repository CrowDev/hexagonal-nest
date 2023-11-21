export interface IFindProductByIdUseCase {
  findProductById(id: number): Promise<any>;
}

export interface IFindAllProductsUseCase {
  findAllProducts(): Promise<any>;
}
