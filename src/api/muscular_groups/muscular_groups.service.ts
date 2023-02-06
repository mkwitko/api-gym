import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateMuscularGroupDto } from './dto/create-muscular_group.dto';
import { UpdateMuscularGroupDto } from './dto/update-muscular_group.dto';

@Injectable()
export class MuscularGroupsService {
  constructor(private prisma: PrismaService) {}
  async create(CreateMuscularGroupDto: CreateMuscularGroupDto) {
    const exist = await this.prisma.muscular_Group.findFirst({
      where: {
        id: CreateMuscularGroupDto.id,
      },
    });

    if (exist) {
      throw new Error('Esse Grupo Muscular já existe');
    } else {
      return this.prisma.muscular_Group.create({
        data: CreateMuscularGroupDto,
      });
    }
  }

  async createMany(CreateMuscularGroupDto: CreateMuscularGroupDto[]) {
    return await this.prisma.muscular_Group.createMany({
      data: CreateMuscularGroupDto,
    });
  }

  findAll() {
    return this.prisma.muscular_Group.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });
  }

  findOne(id: number) {
    return this.prisma.muscular_Group.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, UpdateMuscularGroupDto: UpdateMuscularGroupDto) {
    await this.prisma.muscular_Group.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return await this.prisma.muscular_Group.update({
      data: UpdateMuscularGroupDto,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    this.prisma.muscular_Group.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return this.prisma.muscular_Group.delete({
      where: {
        id,
      },
    });
  }
}
