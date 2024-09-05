import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: Repository<ProductEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(ProductEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<Repository<ProductEntity>>(
      getRepositoryToken(ProductEntity),
    ); // Obtém o repositório simulado
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

    jest.spyOn(repository, 'find').mockResolvedValue(result);

    expect(await service.getAllProducts()).toEqual(result);
  });
});
