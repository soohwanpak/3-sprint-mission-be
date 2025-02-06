import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  async createArticle(
    userId: string,
    title: string,
    content: string,
    imageUrl: string,
  ) {
    return await this.prisma.article.create({
      data: {
        userId,
        title,
        content,
        imageUrl,
      },
    });
  }

  async getAllArticles(sort: string, search?: string) {
    return this.prisma.article.findMany({
      where: {
        OR: search
          ? [{ title: { contains: search } }, { content: { contains: search } }]
          : undefined,
      },
      orderBy: sort === 'like' ? { like: 'desc' } : { createdAt: 'desc' },
      include: {
        user: { select: { nickname: true } },
      },
    });
  }

  async getBestArticles() {
    return this.prisma.article.findMany({
      take: 3,
      orderBy: { like: 'desc' },
      include: {
        user: { select: { nickname: true } },
      },
    });
  }
}
