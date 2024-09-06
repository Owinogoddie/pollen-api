import { PartialType } from '@nestjs/swagger';
import { CreatePollenDto } from './create-pollen.dto';

export class UpdatePollenDto extends PartialType(CreatePollenDto) {}
