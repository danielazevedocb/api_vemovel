import { Module } from '@nestjs/common';
import { FormPgtoModule } from './module/formpgto/formpgto.module';


@Module({
  imports: [FormPgtoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
