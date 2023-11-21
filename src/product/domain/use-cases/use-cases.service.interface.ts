export interface IFindProductByIdUseCase {
  findProductById(id: number): Promise<any>;
}
