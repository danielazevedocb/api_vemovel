import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateFormPgtoDto } from './dto/create-formpgto.dto';
import { UpdateFormPgtoDto } from './dto/update-formpgto.dto';
import { FormPgtoService } from './formpgto.service';

@Controller('formpgto')
export class FormPgtoController {
  constructor(private readonly formPgtoService: FormPgtoService) {}

  @Post()
  create(@Body() createFormPgtoDto: CreateFormPgtoDto) {
    return this.formPgtoService.create(createFormPgtoDto);
  }

  @Get()
  findAll() {
    return this.formPgtoService.findAll();
  }

  @Get(':NCOND')
  findOne(@Param('NCOND') NCOND: number) {
    return this.formPgtoService.findOne(NCOND);
  }

  @Put(':NCOND')
  update(@Param('NCOND') NCOND: number, @Body() updateFormPgtoDto: UpdateFormPgtoDto) {
    return this.formPgtoService.update(NCOND, updateFormPgtoDto);
  }

  @Delete(':NCOND')
  remove(@Param('NCOND') NCOND: number) {
    return this.formPgtoService.remove(NCOND);
  }
}
