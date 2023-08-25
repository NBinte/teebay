import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor (private prisma: PrismaService) {}

  async addNewProduct (createProductInput: CreateProductInput) {
    const createdProduct = await this.prisma.product.create({
      data: {
        ...createProductInput,
        categories: {
          create: [
            {
              assignedAt: new Date(),
              category: {
                create: {
                  name: createProductInput.categories.name,
                },
              },
            },
          ],
        },
      },
    });

    return createdProduct;
  }
}
