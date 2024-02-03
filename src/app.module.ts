import { Module } from '@nestjs/common';
import { InvestmentModule } from './investment/investment.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    InvestmentModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
  ],
})
export class AppModule {}
