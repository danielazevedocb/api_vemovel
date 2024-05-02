import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateFormPgtoDto } from './dto/create-formpgto.dto';
import { UpdateFormPgtoDto } from './dto/update-formpgto.dto';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class FormPgtoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFormPgtoDto: CreateFormPgtoDto) {
    const existingFormPgto = await this.prisma.formPgto.findUnique({
      where: { NCOND: createFormPgtoDto.NCOND },
    });
    if (existingFormPgto) {
      throw new ConflictException('Esta forma de pagamento já existe.');
    }
    
    return await this.prisma.formPgto.create({ data: createFormPgtoDto });
  }

  async findAll() {
    return await this.prisma.formPgto.findMany({
      select: {
        NCOND: true,
        CONDICAO: true,
        ACRESCIMO: true,
        DESCONTO: true,
        PRAZOMEDIO: true,
        VALORMINIMO: true,
        USACAIXA: true,
        MODOSPAGTO: true,
      },
    });
  }

  async findOne(NCOND: number) {
    const formPgto = await this.prisma.formPgto.findUnique({
      where: { NCOND: Number(NCOND) },
      select: {
        NCOND: true,
        CONDICAO: true,
        ACRESCIMO: true,
        DESCONTO: true,
        PRAZOMEDIO: true,
        VALORMINIMO: true,
        USACAIXA: true,
        MODOSPAGTO: true,
      },
    });
    
    if (!formPgto) {
      throw new NotFoundException('Forma de pagamento não encontrada.');
    }
  
    return formPgto;
  }

  async update(NCOND: number, updateFormPgtoDto: UpdateFormPgtoDto) {
    return await this.prisma.formPgto.update({
      where: { NCOND: Number(NCOND) },
      data: updateFormPgtoDto,
    });
  }
  

  async remove(NCOND: number) {
    const formPgto = await this.prisma.formPgto.findUnique({
      where: { NCOND: Number(NCOND) },
    });
    if (!formPgto) {
      throw new NotFoundException('Forma de pagamento não encontrada.');
    }
    
    return await this.prisma.formPgto.delete({ where: { NCOND: Number(NCOND) } });
  }
}
