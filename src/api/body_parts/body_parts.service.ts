import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateBodyPartDto } from './dto/create-body_part.dto';
import { UpdateBodyPartDto } from './dto/update-body_part.dto';

@Injectable()
export class BodyPartsService {
  constructor(private prisma: PrismaService) {}
  async create(CreateBodyPartDto: CreateBodyPartDto) {
    const exist = await this.prisma.body_Parts.findFirst({
      where: {
        id: CreateBodyPartDto.id,
      },
    });

    if (exist) {
      throw new Error('Esse Body Part já existe');
    } else {
      return this.prisma.body_Parts.create({
        data: CreateBodyPartDto,
      });
    }
  }

  async createMany(CreateBodyPartDto: CreateBodyPartDto[]) {
    return await this.prisma.body_Parts.createMany({ data: CreateBodyPartDto });
  }

  findAll() {
    return this.prisma.body_Parts.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });
  }

  findOne(id: number) {
    return this.prisma.body_Parts.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, UpdateBodyPartDto: UpdateBodyPartDto) {
    await this.prisma.body_Parts.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return await this.prisma.body_Parts.update({
      data: UpdateBodyPartDto,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    this.prisma.body_Parts.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return this.prisma.body_Parts.delete({
      where: {
        id,
      },
    });
  }
}
