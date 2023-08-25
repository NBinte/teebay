import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { GetUserInput } from './dto/get-user.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor (private prisma: PrismaService) {}

  async createNewUser (createUserInput: CreateUserInput) {
    const createdUser = await this.prisma.user.create({
      data: createUserInput,
    });

    return createdUser;
  }

  async getUserByField (getUserInput: GetUserInput) {
    let queryArray = {};

    if (getUserInput.id) {
      queryArray['id'] = getUserInput.id;
    }

    if (getUserInput.email) {
      queryArray['email'] = getUserInput.email;
    }

    const fetchedUser = this.prisma.user.findFirstOrThrow({
      where: queryArray,
    });

    return fetchedUser;
  }
}
