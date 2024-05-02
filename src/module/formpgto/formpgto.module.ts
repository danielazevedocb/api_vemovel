import { Module } from '@nestjs/common';
import { FormPgtoService } from './formpgto.service';
import { FormPgtoController } from './formpgto.controller';
import { PrismaService } from 'src/database/database.service';

@Module({
  controllers: [FormPgtoController],
  providers: [PrismaService, FormPgtoService],
})
export class FormPgtoModule {}
