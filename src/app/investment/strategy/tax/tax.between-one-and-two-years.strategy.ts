import { TaxStrategy } from './tax.strategy';

export class TaxBetweenOneAndTwoYears implements TaxStrategy {
  calculateTax(value: number): number {
    return value * 0.185;
  }
}
