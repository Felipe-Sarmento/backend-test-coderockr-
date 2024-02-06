import { Module } from '@nestjs/common';
import { InvestmentModule } from './investment/investment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    InvestmentModule,
    MongooseModule.forRoot(process.env.DB_URL),
  ],
})
export class AppModule {}
