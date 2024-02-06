import { UseCase } from 'src/app/shared/model/usecase';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateCompoundInterestUseCase implements UseCase<number> {
  BASE_INTEREST = 0.0052;

  async execute(value: number, monthCount: number): Promise<number> {
    return value * Math.pow(1 + this.BASE_INTEREST, monthCount);
  }
}
