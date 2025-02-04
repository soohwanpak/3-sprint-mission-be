import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { ImageModule } from './image/image.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtGlobalModule } from './auth/jwt.module';

@Module({
  imports: [
    JwtGlobalModule,
    PrismaModule,
    CommentModule,
    UserModule,
    ArticleModule,
    ProductModule,
    ImageModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    UserController,
    ProductController,
    AuthController,
  ],
  providers: [AppService, UserService, ProductService, AuthService],
})
export class AppModule {}
