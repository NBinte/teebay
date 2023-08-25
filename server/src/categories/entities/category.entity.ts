import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductEntity } from 'src/products/entities/product.entity';

@ObjectType()
export class CategoryEntity {
  @Field(() => Int, { description: 'Id of User', nullable: true })
  id: number;

  @Field(() => String, { description: 'First Name of User', nullable: true })
  name: string;

  @Field(() => [ProductEntity], {
    description: 'Password of User',
    nullable: true,
  })
  products: ProductEntity[];

  @Field(() => Date, { description: 'Password of User', nullable: true })
  createdAt: Date;

  @Field(() => Date, { description: 'Password of User', nullable: true })
  updatedAt: Date;
}
