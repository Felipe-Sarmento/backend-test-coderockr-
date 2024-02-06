export interface TaxStrategy {
  calculateTax(value: number): number;
}
