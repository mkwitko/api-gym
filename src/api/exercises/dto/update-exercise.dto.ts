import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseDto } from './create-exercise.dto';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
  name?: string;
  target?: string;
  bodyPart?: string;
  equipment?: string;
  gifUrl?: string;
}
