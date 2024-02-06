import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Investment, InvestmentSchema } from './schema/investment.schema';
import { InvestmentRepository } from './repository/investment.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Investment.name, schema: InvestmentSchema },
    ]),
  ],
  providers: [InvestmentRepository],
  exports: [InvestmentRepository],
})
export class DatabaseModule {}
