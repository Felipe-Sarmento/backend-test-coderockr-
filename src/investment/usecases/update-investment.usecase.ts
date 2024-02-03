import { UseCase } from 'src/shared/model/usecase';
import { InvestmentEntity } from '../dto/investment.model';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Investment } from '../schema/investment.schema';

export class UpdateInvestmentUsecase implements UseCase<InvestmentEntity> {
  constructor(
    @InjectModel(Investment.name)
    private readonly investment: Model<Investment>,
  ) {}

  async execute(id: string, amount: number): Promise<InvestmentEntity> {
    const updatedInvestment = await this.investment
      .updateOne({ _id: id }, { amount })
      .exec();

    if (updatedInvestment.matchedCount == 0) {
      throw new NotFoundException('Investment not found');
    }

    if (!updatedInvestment.acknowledged) {
      throw new InternalServerErrorException(
        'Error updating investment for id ' + id,
      );
    }

    return await this.investment.findById(id).exec();
  }
}
