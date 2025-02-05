import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts() {
    return await this.prisma.product.findMany();
  }

  async getProductById(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        user: { select: { nickname: true } },
      },
    });
  }
}
