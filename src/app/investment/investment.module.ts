import { Module } from '@nestjs/common';
import { InvestmentService } from './services/investment.service';
import { InvestmentController } from './controller/investment.controller';
import { GetInvestmentUsecase } from './usecases/get-investment.usecase';
import { CreateInvestmentUsecase } from './usecases/create-investment.usecase';
import { DeleteInvestmentUsecase } from './usecases/delete-investment.usecase';
import { UpdateInvestmentUsecase } from './usecases/update-investment.usecase';
import { DatabaseModule } from '../database/database.module';
import { CalculateCompoundInterestUseCase } from './usecases/calculate-compound-gain';
import { CalculateGainUseCase } from './usecases/calculate-gain.usecase.usecase';
import { CalculateTaxesUseCase } from './usecases/calculate-taxes.usecase';
import { WithdrawInvestmentUseCase } from './usecases/withdraw-investment.usecase';

@Module({
  imports: [DatabaseModule],
  providers: [
    InvestmentService,
    GetInvestmentUsecase,
    CreateInvestmentUsecase,
    UpdateInvestmentUsecase,
    DeleteInvestmentUsecase,
    WithdrawInvestmentUseCase,
    CalculateGainUseCase,
    CalculateCompoundInterestUseCase,
    CalculateTaxesUseCase,
  ],
  controllers: [InvestmentController],
})
export class InvestmentModule {}
