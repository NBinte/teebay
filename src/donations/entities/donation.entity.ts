import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Donation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
