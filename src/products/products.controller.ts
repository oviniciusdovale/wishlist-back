import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductEntity } from './entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<ProductEntity[]> {
    return this.productService.getAllProducts();
  }
}
