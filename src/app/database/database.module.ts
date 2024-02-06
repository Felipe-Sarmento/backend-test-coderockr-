import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Investment, InvestmentSchema } from './schema/investment.schema';
import { InvestmentRepository } from './repository/investment.repository';
import { WithdrawRepository } from './repository/withdraw.repository';
import { Withdraw, WithdrawSchema } from './schema/withdraw.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Investment.name, schema: InvestmentSchema },
      { name: Withdraw.name, schema: WithdrawSchema },
    ]),
  ],
  providers: [InvestmentRepository, WithdrawRepository],
  exports: [InvestmentRepository, WithdrawRepository],
})
export class DatabaseModule {}
