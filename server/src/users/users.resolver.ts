import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';

import { UserEntity } from './entities/user.entity';
import { GetUserInput } from './dto/get-user.input';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor (private readonly usersService: UsersService) {}

  @Mutation(() => UserEntity, { name: 'createNewUser' })
  async createNewUser (
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return await this.usersService.createNewUser(createUserInput);
  }

  @Query(() => UserEntity, { name: 'getUserByField' })
  async getUserByField (@Args('getUserInput') getUserInput: GetUserInput) {
    return await this.usersService.getUserByField(getUserInput);
  }
}
