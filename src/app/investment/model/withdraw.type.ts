export type WithdrawType = {
  _id: string;
  value: number;
  interestBeforeTax: number;
  withdrawDate: Date;
  taxPercentage: number;
  investmentId: string;
};
