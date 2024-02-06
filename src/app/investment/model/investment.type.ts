export type InvestmentType = {
  initialInvestment: number;
  withdrawnValue: number;
  ownerId: string;
  creationDate: Date;
  _id: string;
  withdrawn: boolean;
};

export type CreateInvestmentType = InvestmentType;

export type UpdateInvestmentType = {
  initialInvestment: number;
};
