import { PartialType } from '@nestjs/mapped-types';
import { CreateBodyPartDto } from './create-body_part.dto';

export class UpdateBodyPartDto extends PartialType(CreateBodyPartDto) {
  id?: number;
  name: string;
}
