import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';

@Resolver(() => ProductEntity)
export class ProductsResolver {
  constructor (private readonly productsService: ProductsService) {}

  @Mutation(() => ProductEntity, { name: 'addNewProduct' })
  async addNewProduct (
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return await this.productsService.addNewProduct(createProductInput);
  }
}
