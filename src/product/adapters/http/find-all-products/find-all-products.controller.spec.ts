import { Test, TestingModule } from '@nestjs/testing';
import { FindAllProductsController } from './find-all-products.controller';

describe('FindAllProductsController', () => {
  let controller: FindAllProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllProductsController],
    }).compile();

    controller = module.get<FindAllProductsController>(FindAllProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
