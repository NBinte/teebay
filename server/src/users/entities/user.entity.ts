import {
  ObjectType,
  Field,
  Int,
  ID,
  GraphQLISODateTime,
} from '@nestjs/graphql';
import { DateTime } from 'graphql-scalars/typings/typeDefs';

@ObjectType()
export class UserEntity {
  @Field(() => Int, { description: 'Id of User', nullable: true })
  id: number;

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

  @Field(() => Date, { description: 'Password of User', nullable: true })
  createdAt: Date;

  @Field(() => Date, { description: 'Password of User', nullable: true })
  updatedAt: Date;
}
