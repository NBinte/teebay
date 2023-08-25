import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'First Name of User', nullable: true })
  firstName: string;

  @Field(() => String, { description: 'Last name of User', nullable: true })
  lastName: string;

  @Field(() => String, { description: 'Address of User', nullable: true })
  address: string;

  @Field(() => String, { description: 'Email of User', nullable: true })
  email: string;

  @Field(() => String, { description: 'Phone Number of User', nullable: true })
  phoneNumber: string;

  @Field(() => String, { description: 'Password of User', nullable: true })
  password: string;
}
