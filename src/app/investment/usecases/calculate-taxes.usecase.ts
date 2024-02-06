import { UseCase } from 'src/app/shared/model/usecase';

import { Injectable } from '@nestjs/common';
import { TaxStrategy } from '../strategy/tax/tax.strategy';
import { TaxLessThanAYear } from '../strategy/tax/tax.less-than-a-year.strategy';
import { TaxBetweenOneAndTwoYears } from '../strategy/tax/tax.between-one-and-two-years.strategy';
import { TaxMoreThanTwoYears } from '../strategy/tax/tax.more-than-two-years.strategy';

@Injectable()
export class CalculateTaxesUseCase implements UseCase<number> {
  constructor() {}

  async execute(
    value: number,
    investmentDate: Date,
    withdrawDate: Date,
  ): Promise<number> {
    let strategy: TaxStrategy;
    if (
      withdrawDate.getTime() - investmentDate.getTime() <
      365 * 24 * 60 * 60 * 1000
    ) {
      strategy = new TaxLessThanAYear();
    } else if (
      365 * 24 * 60 * 60 * 1000 <=
        withdrawDate.getTime() - investmentDate.getTime() &&
      new Date().getTime() - investmentDate.getTime() <
        365 * 2 * 24 * 60 * 60 * 1000
    ) {
      strategy = new TaxBetweenOneAndTwoYears();
    } else {
      strategy = new TaxMoreThanTwoYears();
    }

    return strategy.calculateTax(value);
  }
}
