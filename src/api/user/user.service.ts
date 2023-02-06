import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    await this.prisma.users.findUniqueOrThrow({
      where: { id: createUserDto.id },
    });

    return await this.prisma.users.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.prisma.users.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.users.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  async findByName(userName: string) {
    return await this.prisma.users.findFirstOrThrow({
      where: { userName },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.prisma.users.findUniqueOrThrow({ where: { id } });
    return await this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    await this.prisma.users.findUniqueOrThrow({ where: { id } });
    return await this.prisma.users.delete({ where: { id } });
  }

  async login(user: CreateUserDto) {
    return 'login';
  }

  async register(user: CreateUserDto) {
    return 'register';
  }
}
