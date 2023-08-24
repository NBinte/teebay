import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { GetUserInput } from './dto/get-user.input';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class UsersService {
  constructor (private prisma: PrismaService) {}

  create (createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll () {
    return `This action returns all users`;
  }

  findOne (id: number) {
    return `This action returns a #${id} user`;
  }

  update (id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove (id: number) {
    return `This action removes a #${id} user`;
  }

  async createNewUser (createUserInput: CreateUserInput) {
    const createdUser = this.prisma.user.create({
      data: createUserInput,
    });

    return createdUser;
  }

  async getUserByID (getUserInput: GetUserInput) {
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
