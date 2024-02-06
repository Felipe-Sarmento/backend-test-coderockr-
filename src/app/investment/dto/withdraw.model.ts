import { ApiProperty } from '@nestjs/swagger';
import { WithdrawType } from '../model/withdraw.type';

export class WithdrawEntity implements WithdrawType {
  @ApiProperty({
    description: 'Amount to be withdrawn',
    minimum: 0,
    example: 5000,
    type: 'number',
  })
  value: number;

  @ApiProperty({
    description: 'Interest before tax',
    minimum: 0,
    example: 10000,
    type: 'number',
  })
  interestBeforeTax: number;

  @ApiProperty({
    description: 'The date a investment is withdrawn',
    default: new Date(),
    type: 'date',
  })
  withdrawDate: Date;

  @ApiProperty({
    description: 'Percentage of taxation',
    minimum: 0.01,
    example: 0.5,
    type: 'number',
  })
  taxPercentage: number;

  @ApiProperty({
    description: 'Id of the investment',
    type: 'string',
  })
  investmentId: string;
}
