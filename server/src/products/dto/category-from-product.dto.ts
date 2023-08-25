import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoryFromProductDto {
  @Field(() => Int, { description: 'Id of User', nullable: true })
  id: number;

  @Field(() => String, { description: 'First Name of User', nullable: true })
  name: string;

  @Field(() => Date, { description: 'Password of User', nullable: true })
  createdAt: Date;

  @Field(() => Date, { description: 'Password of User', nullable: true })
  updatedAt: Date;
}
