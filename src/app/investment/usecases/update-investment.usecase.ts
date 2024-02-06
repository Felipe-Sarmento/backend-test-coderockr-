import { UseCase } from 'src/app/shared/model/usecase';
import { InvestmentEntity } from '../dto/investment.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InvestmentRepository } from 'src/app/database/repository/investment.repository';

@Injectable()
export class UpdateInvestmentUsecase implements UseCase<InvestmentEntity> {
  constructor(private readonly investmentRepository: InvestmentRepository) {}

  async execute(
    id: string,
    initialInvestment: number,
  ): Promise<InvestmentEntity> {
    const updatedInvestment = await this.investmentRepository.update(
      id,
      initialInvestment,
    );

    if (!updatedInvestment) {
      throw new NotFoundException('Investment not found');
    }

    return await this.investmentRepository.get(id);
  }
}
