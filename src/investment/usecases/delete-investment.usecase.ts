import { UseCase } from 'src/shared/model/usecase';
import { InvestmentEntity } from '../dto/investment.model';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Investment } from '../schema/investment.schema';

export class DeleteInvestmentUsecase implements UseCase<InvestmentEntity> {
  constructor(
    @InjectModel(Investment.name)
    private readonly investment: Model<Investment>,
  ) {}

  async execute(id: string): Promise<null> {
    const investmentDeleted = await this.investment
      .deleteOne({ _id: id })
      .exec();

    if (investmentDeleted.deletedCount == 0) {
      throw new NotFoundException('Investment not found');
    }

    if (!investmentDeleted.acknowledged) {
      throw new InternalServerErrorException(
        'Error deleting investment for id ' + id,
      );
    }
    return null;
  }
}
