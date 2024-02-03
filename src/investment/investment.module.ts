import { Module } from '@nestjs/common';
import { InvestmentService } from './services/investment.service';
import { InvestmentController } from './controller/investment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Investment, InvestmentSchema } from './schema/investment.schema';
import { GetInvestmentUsecase } from './usecases/get-investment.usecase';
import { CreateInvestmentUsecase } from './usecases/create-investment.usecase';
import { DeleteInvestmentUsecase } from './usecases/delete-investment.usecase';
import { UpdateInvestmentUsecase } from './usecases/update-investment.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Investment.name, schema: InvestmentSchema },
    ]),
  ],
  providers: [
    InvestmentService,
    GetInvestmentUsecase,
    CreateInvestmentUsecase,
    UpdateInvestmentUsecase,
    DeleteInvestmentUsecase,
  ],
  controllers: [InvestmentController],
})
export class InvestmentModule {}
