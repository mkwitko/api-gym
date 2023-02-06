import { Module } from '@nestjs/common';
import { BodyPartsService } from './body_parts.service';
import { BodyPartsController } from './body_parts.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [BodyPartsController],
  providers: [BodyPartsService, PrismaService],
})
export class BodyPartsModule {}
