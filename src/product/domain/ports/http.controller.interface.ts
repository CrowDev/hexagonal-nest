export interface IFindProductById {
  findProductById(id: number): Promise<any>;
}

export interface IFindAllProducts {
  findAllProducts(): Promise<any>;
}
