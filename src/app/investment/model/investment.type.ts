import { WithdrawType } from './withdraw.type';

export type InvestmentType = {
  initialInvestment: number;
  ownerId: string;
  creationDate: Date;
  _id: string;
  withdraw: WithdrawType;
};

export type CreateInvestmentType = InvestmentType;

export type UpdateInvestmentType = {
  initialInvestment: number;
};
