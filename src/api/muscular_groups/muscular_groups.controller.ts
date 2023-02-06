import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MuscularGroupsService } from './muscular_groups.service';
import { CreateMuscularGroupDto } from './dto/create-muscular_group.dto';
import { UpdateMuscularGroupDto } from './dto/update-muscular_group.dto';

@Controller('muscular-groups')
export class MuscularGroupsController {
  constructor(private readonly muscularGroupsService: MuscularGroupsService) {}

  @Post()
  create(@Body() createMuscularGroupDto: CreateMuscularGroupDto) {
    return this.muscularGroupsService.create(createMuscularGroupDto);
  }

  @Get()
  findAll() {
    return this.muscularGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.muscularGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMuscularGroupDto: UpdateMuscularGroupDto,
  ) {
    return this.muscularGroupsService.update(+id, updateMuscularGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.muscularGroupsService.remove(+id);
  }
}
