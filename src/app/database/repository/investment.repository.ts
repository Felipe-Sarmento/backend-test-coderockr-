import { InjectModel } from '@nestjs/mongoose';
import { Repository } from '../../shared/model/repository';
import { Investment } from 'src/app/database/schema/investment.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InvestmentRepository implements Repository<Investment> {
  constructor(
    @InjectModel(Investment.name)
    private readonly investment: Model<Investment>,
  ) {}
  getAll(): Promise<Investment[]> {
    return this.investment.find().exec();
  }
  get(id: string): Promise<Investment> {
    return this.investment.findById(id).exec();
  }
  add(initialInvestment: number, ownerId: string): Promise<Investment> {
    return new this.investment({ initialInvestment, ownerId }).save();
  }
  async update(id: string, initialInvestment: number): Promise<Investment> {
    const investmentUpdated = await this.investment
      .updateOne({ _id: id }, { initialInvestment })
      .exec();

    if (
      investmentUpdated.matchedCount == 0 ||
      !investmentUpdated.acknowledged
    ) {
      return null;
    }

    return await this.get(id);
  }
  async delete(id: string): Promise<Investment> {
    const investmentExists = await this.get(id);

    const investmentDeleted = await this.investment
      .deleteOne({ _id: id })
      .exec();

    if (
      investmentDeleted.deletedCount == 0 ||
      !investmentDeleted.acknowledged
    ) {
      return null;
    }

    return investmentExists;
  }
}
