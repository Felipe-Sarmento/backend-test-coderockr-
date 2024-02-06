import { UseCase } from 'src/app/shared/model/usecase';
import { InvestmentEntity } from '../dto/investment.model';
import { InvestmentRepository } from 'src/app/database/repository/investment.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateInvestmentUsecase implements UseCase<InvestmentEntity> {
  constructor(private readonly investmentRepository: InvestmentRepository) {}

  async execute(
    initialInvestment: number,
    ownerId: string,
  ): Promise<InvestmentEntity> {
    return this.investmentRepository.add(initialInvestment, ownerId);
  }
}
