import { UseCase } from 'src/shared/model/usecase';
import { InvestmentEntity } from '../dto/investment.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Investment } from '../schema/investment.schema';

export class CreateInvestmentUsecase implements UseCase<InvestmentEntity> {
  constructor(
    @InjectModel(Investment.name)
    private readonly investment: Model<Investment>,
  ) {}

  async execute(amount: number, ownerId: string): Promise<InvestmentEntity> {
    return new this.investment({ amount, ownerId }).save();
  }
}
