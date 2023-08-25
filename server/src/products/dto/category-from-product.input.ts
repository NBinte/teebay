import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CategoryFromProductInput {
  @Field(() => String, { description: 'First Name of User', nullable: true })
  name: string;
}
