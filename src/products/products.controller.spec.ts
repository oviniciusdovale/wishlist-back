import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './products.controller';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';

describe('ProductsController', () => {
  let controller: ProductController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(ProductEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('should return an array of products', async () => {
    const result: ProductEntity[] = [
      {
        id: 1,
        code: 'P001',
        name: 'Product 1',
        available: true,
        visible: true,
        details: {
          name: 'Product 1',
          description: 'Description of Product 1',
        },
        fullPriceInCents: '10000',
        salePriceInCents: '9000',
        rating: 4.5,
        image: 'https://example.com/product-image.jpg',
        stockAvailable: true,
      },
    ];

    jest.spyOn(service, 'getAllProducts').mockResolvedValue(result);

    expect(await controller.getAllProducts()).toBe(result);
  });
});
