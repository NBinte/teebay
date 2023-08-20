import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDonationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
