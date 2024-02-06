import { TaxStrategy } from './tax.strategy';

export class TaxMoreThanTwoYears implements TaxStrategy {
  calculateTax(value: number): number {
    return value * 0.15;
  }
}
