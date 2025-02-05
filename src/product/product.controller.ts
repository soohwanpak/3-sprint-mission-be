import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const product = await this.productService.getProductById(id);
    if (!product) {
      throw new NotFoundException('상품을 찾을 수 없습니다.');
    }
    return product;
  }
}
