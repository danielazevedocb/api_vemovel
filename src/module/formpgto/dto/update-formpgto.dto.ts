import { PartialType } from '@nestjs/mapped-types';
import { CreateFormPgtoDto } from './create-formpgto.dto';

export class UpdateFormPgtoDto extends PartialType(CreateFormPgtoDto) {}
