import { UseCase } from 'src/app/shared/model/usecase';
import { InvestmentEntity } from '../dto/investment.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InvestmentRepository } from 'src/app/database/repository/investment.repository';
import { CalculateGainUseCase } from './calculate-gain.usecase.usecase';
import { CalculateTaxesUseCase } from './calculate-taxes.usecase';

@Injectable()
export class WithdrawInvestmentUseCase implements UseCase<InvestmentEntity> {
  constructor(
    private readonly investmentRepository: InvestmentRepository,
    private readonly calculateGain: CalculateGainUseCase,
    private readonly calculateTaxes: CalculateTaxesUseCase,
  ) {}

  async execute(id: string, date: Date): Promise<InvestmentEntity> {
    const investmentExists = await this.investmentRepository.get(id);

    if (!investmentExists) {
      throw new NotFoundException('Investment not found');
    }

    if (!date) {
      date = new Date();
    } else {
      date = new Date(date);
    }

    const totalBeforeTaxes = await this.calculateGain.execute(
      investmentExists.initialInvestment,
      date,
      investmentExists.creationDate,
    );

    const totalInterest = totalBeforeTaxes - investmentExists.initialInvestment;

    const taxes = await this.calculateTaxes.execute(
      totalInterest,
      investmentExists.creationDate,
      date,
    );

    const createWithdraw = await this.investmentRepository.insertWithdraw(id, {
      value: totalBeforeTaxes - taxes,
      interestBeforeTax: totalBeforeTaxes,
      withdrawDate: date,
      investmentId: id,
    });

    return createWithdraw;
  }
}
