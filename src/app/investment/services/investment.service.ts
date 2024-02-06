import { Injectable } from '@nestjs/common';
import { InvestmentEntity } from '../dto/investment.model';
import { GetInvestmentUsecase } from '../usecases/get-investment.usecase';
import { CreateInvestmentUsecase } from '../usecases/create-investment.usecase';
import { UpdateInvestmentUsecase } from '../usecases/update-investment.usecase';
import { DeleteInvestmentUsecase } from '../usecases/delete-investment.usecase';

@Injectable()
export class InvestmentService {
  constructor(
    private readonly getInvestmentUseCase: GetInvestmentUsecase,
    private readonly createInvestmentUseCase: CreateInvestmentUsecase,
    private readonly updateInvestmentUseCase: UpdateInvestmentUsecase,
    private readonly deleteInvestmentUseCase: DeleteInvestmentUsecase,
  ) {}

  async createInvestment(
    initialInvestment: number,
    ownerId: string,
  ): Promise<InvestmentEntity> {
    return this.createInvestmentUseCase.execute(initialInvestment, ownerId);
  }

  async viewInvestment(id: string): Promise<InvestmentEntity> {
    return this.getInvestmentUseCase.execute(id);
  }

  async deleteInvestment(id: string): Promise<string> {
    return this.deleteInvestmentUseCase.execute(id);
  }

  async updateInvestment(
    id: string,
    initialInvestment: number,
  ): Promise<InvestmentEntity> {
    return this.updateInvestmentUseCase.execute(id, initialInvestment);
  }
}
