import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, ProductsResolver, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
