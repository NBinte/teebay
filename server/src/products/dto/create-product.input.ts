import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { CategoryFromProductInput } from './category-from-product.input';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'First Name of User', nullable: true })
  title: string;

  @Field(() => Float, { description: 'Last name of User', nullable: true })
  price: number;

  @Field(() => Float, { description: 'Address of User', nullable: true })
  rent: number;

  @Field(() => String, { description: 'Email of User', nullable: true })
  description: string;

  @Field(() => Int, { description: 'Phone Number of User', nullable: true })
  views: number;

  @Field(() => CategoryFromProductInput, {
    description: 'Password of User',
    nullable: true,
  })
  categories: CategoryFromProductInput;
}
