import { ApiProperty } from '@nestjs/swagger';
import { UpdateInvestmentType } from '../model/investment.type';

export class UpdateInvestmentDTO implements UpdateInvestmentType {
  @ApiProperty({
    description: 'Amount to be invested',
    minimum: 0,
    default: 2000,
    example: 2000,
    type: 'number',
  })
  amount: number;
}
