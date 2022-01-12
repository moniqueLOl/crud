import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalaoController } from './controller/salao.controller';
import { Salao, SalaoSchema } from './entities/salao.entity';
import { SalaoService } from './service/salao.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Salao.name, schema: SalaoSchema }])],
  controllers: [SalaoController],
  providers: [SalaoService]
})
export class SalaoModule { }
