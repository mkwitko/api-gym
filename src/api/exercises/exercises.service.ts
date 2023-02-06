import fs from 'fs';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(private prisma: PrismaService, private http: HttpService) {}
  async create(CreateExerciseDto: CreateExerciseDto) {
    const exerciseExist = await this.prisma.exercises.findFirst({
      where: {
        exerciseId: CreateExerciseDto.exerciseId,
      },
    });

    if (exerciseExist) {
      throw new Error('Esse exercicio já existe');
    } else {
      return this.prisma.exercises.create({
        data: CreateExerciseDto,
      });
    }
  }

  async createMany(CreateExerciseDto: CreateExerciseDto[]) {
    return await this.prisma.exercises.createMany({ data: CreateExerciseDto });
  }

  findAll() {
    return this.prisma.exercises.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });
  }

  findOne(id: number) {
    return this.prisma.exercises.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateExercisesDto: UpdateExerciseDto) {
    await this.prisma.exercises.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return await this.prisma.exercises.update({
      data: updateExercisesDto,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    this.prisma.exercises.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return this.prisma.exercises.delete({
      where: {
        id,
      },
    });
  }
}
