import { UseCase } from 'src/app/shared/model/usecase';
import { InvestmentEntity } from '../dto/investment.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InvestmentRepository } from 'src/app/database/repository/investment.repository';

@Injectable()
export class DeleteInvestmentUsecase implements UseCase<InvestmentEntity> {
  constructor(private readonly investmentRepository: InvestmentRepository) {}

  async execute(id: string): Promise<null> {
    const investmentDeleted = await this.investmentRepository.delete(id);

    if (!investmentDeleted) {
      throw new NotFoundException('Investment not found');
    }
    return null;
  }
}
