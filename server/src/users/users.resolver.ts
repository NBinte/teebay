import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaClient } from '@prisma/client';
import { UserEntity } from './entities/user.entity';
import { GetUserInput } from './dto/get-user.input';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor (private readonly usersService: UsersService) {}

  // @Mutation(() => UserEntity)
  // createUser (@Args('createUserInput') createUserInput: CreateUserInput) {
  //   return this.usersService.create(createUserInput);
  // }

  // @Query(() => [UserEntity], { name: 'users' })
  // findAll () {
  //   return this.usersService.findAll();
  // }

  // @Query(() => UserEntity, { name: 'user' })
  // findOne (@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.findOne(id);
  // }

  // @Mutation(() => UserEntity)
  // updateUser (@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => UserEntity)
  // removeUser (@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }

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
