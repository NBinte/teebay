import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor (private prisma: PrismaService) {}

  async addNewProduct (createProductInput: CreateProductInput) {
    let array = [];
    createProductInput.categories.map((each: any) => {
      let obj = {};

      obj['name'] = each.title;
      obj['assignedAt'] = new Date();
      obj['category'] = {
        create: {
          name: each.name,
        },
      };

      array.push(obj);
    });

    const createdProduct = await this.prisma.product.create({
      data: {
        ...createProductInput,
        categories: {
          create: array,
        },
      },
    });

    const id = createdProduct.id;

    return createdProduct;
  }
}
