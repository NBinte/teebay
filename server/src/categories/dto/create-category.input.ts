import { InputType, Field } from '@nestjs/graphql';
import { CreateProductInput } from 'src/products/dto/create-product.input';

@InputType()
export class CreateCategoryInput {
  @Field(() => String, { description: 'First Name of User', nullable: true })
  name: string;

  @Field(() => [CreateProductInput], {
    description: 'Password of User',
    nullable: true,
  })
  products: CreateProductInput[];
}
