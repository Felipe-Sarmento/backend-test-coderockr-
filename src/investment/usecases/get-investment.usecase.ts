import { UseCase } from 'src/shared/model/usecase';
import { InvestmentEntity } from '../dto/investment.model';
import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Investment } from '../schema/investment.schema';

export class GetInvestmentUsecase implements UseCase<InvestmentEntity> {
  constructor(
    @InjectModel(Investment.name)
    private readonly investment: Model<Investment>,
  ) {}

  async execute(id: string): Promise<InvestmentEntity> {
    const investmentExists = await this.investment.findById(id).exec();
    if (!investmentExists) {
      throw new NotFoundException('Investment not found');
    }
    return investmentExists;
  }
}
