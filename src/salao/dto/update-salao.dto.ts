import { PartialType } from '@nestjs/mapped-types';
import { CreateSalaoDto } from './create-salao.dto';

export class UpdateSalaoDto extends PartialType(CreateSalaoDto) {}
