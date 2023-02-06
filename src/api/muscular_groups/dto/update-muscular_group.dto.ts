import { PartialType } from '@nestjs/mapped-types';
import { CreateMuscularGroupDto } from './create-muscular_group.dto';

export class UpdateMuscularGroupDto extends PartialType(
  CreateMuscularGroupDto,
) {
  id?: number;
  name: string;
}
