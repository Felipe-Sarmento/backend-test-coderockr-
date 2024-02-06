import { TaxStrategy } from './tax.strategy';

export class TaxLessThanAYear implements TaxStrategy {
  calculateTax(value: number): number {
    return value * 0.225;
  }
}
