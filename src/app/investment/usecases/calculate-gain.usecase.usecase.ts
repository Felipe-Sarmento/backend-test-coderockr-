import { UseCase } from 'src/app/shared/model/usecase';

import { Injectable } from '@nestjs/common';
import { CalculateCompoundInterestUseCase } from './calculate-compound-gain';

@Injectable()
export class CalculateGainUseCase implements UseCase<number> {
  constructor(
    private readonly calculateCompoundInterestUseCase: CalculateCompoundInterestUseCase,
  ) {}

  async execute(
    value: number,
    withdrawDate: Date,
    investmentDate: Date,
  ): Promise<number> {
    const diffMilliseconds = Math.abs(
      withdrawDate.getTime() - investmentDate.getTime(),
    );
    const diffMeses = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 30));

    return await this.calculateCompoundInterestUseCase.execute(
      value,
      diffMeses,
    );
  }
}
