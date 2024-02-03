export type InvestmentType = {
  amount: number;
  ownerId: string;
  creationDate: Date;
  _id: string;
  withdrawn: boolean;
};

export type CreateInvestmentType = InvestmentType;

export type UpdateInvestmentType = {
  amount: number;
};
