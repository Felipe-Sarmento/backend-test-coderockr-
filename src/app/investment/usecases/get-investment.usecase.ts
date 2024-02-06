import { UseCase } from 'src/app/shared/model/usecase';
import { InvestmentEntity } from '../dto/investment.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InvestmentRepository } from 'src/app/database/repository/investment.repository';

@Injectable()
export class GetInvestmentUsecase implements UseCase<InvestmentEntity> {
  constructor(private readonly investmentRepository: InvestmentRepository) {}

  async execute(id: string): Promise<InvestmentEntity> {
    const investmentExists = await this.investmentRepository.get(id);
    if (!investmentExists) {
      throw new NotFoundException('Investment not found');
    }
    return investmentExists;
  }
}
