import { Module } from '@nestjs/common';
import { MuscularGroupsService } from './muscular_groups.service';
import { MuscularGroupsController } from './muscular_groups.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [MuscularGroupsController],
  providers: [MuscularGroupsService, PrismaService],
})
export class MuscularGroupsModule {}
