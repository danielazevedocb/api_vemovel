import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFormPgtoDto {
  @IsInt()
  @IsNotEmpty()
  NCOND: number;

  @IsString()
  @IsNotEmpty()
  CONDICAO: string;

  @IsOptional()
  ACRESCIMO?: number;

  @IsOptional()
  DESCONTO?: number;

  @IsOptional()
  PRAZOMEDIO?: number;

  @IsOptional()
  VALORMINIMO?: number;

  @IsOptional()
  USACAIXA?: string;

  @IsOptional()
  MODOSPAGTO?: string;
}
