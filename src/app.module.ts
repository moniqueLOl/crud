import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalaoModule } from './salao/salao.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Monique:Ntt0707@crud.hc4s7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    SalaoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
