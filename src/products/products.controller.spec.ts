import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('should return an array of products', async () => {
    const result = [
      {
        id: 1,
        name: 'Product 1',
        code: 'P001',
        available: true,
        full_price_in_cents: 10000,
        sale_price_in_cents: 9000,
        rating: 4.5,
      },
    ];

    jest.spyOn(service, 'findAll').mockImplementation(async () => result);

    expect(await controller.findAll()).toBe(result);
  });
});
