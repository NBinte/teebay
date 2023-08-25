import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { CategoryFromProductDto } from '../dto/category-from-product.dto';

@ObjectType()
export class ProductEntity {
  @Field(() => Int, { description: 'Id of User', nullable: true })
  id: number;

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

  @Field(() => String, { description: 'Password of User', nullable: true })
  password: string;

  @Field(() => [CategoryFromProductDto], {
    description: 'Password of User',
    nullable: true,
  })
  categories: CategoryFromProductDto[];

  @Field(() => Date, { description: 'Password of User', nullable: true })
  createdAt: Date;

  @Field(() => Date, { description: 'Password of User', nullable: true })
  updatedAt: Date;
}
