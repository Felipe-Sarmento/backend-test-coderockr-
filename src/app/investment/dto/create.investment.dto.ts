import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateInvestmentType } from '../model/investment.type';
import { WithdrawType } from '../model/withdraw.type';
import { WithdrawEntity } from './withdraw.model';

export class CreateInvestmentDTO implements CreateInvestmentType {
  _id: string;

  @ApiProperty({
    description: 'Amount to be invested',
    minimum: 0,
    default: 1000,
    example: 1000,
    type: 'number',
  })
  initialInvestment: number;

  @ApiProperty({
    description: 'Owner of the investment',
    default: '5f0e5e9e8b0d9a1c9c3f4e4a',
    type: 'uuid',
  })
  ownerId: string;

  @ApiPropertyOptional({
    description: 'Creation date of the investment, can be a past date or today',
    default: new Date(),
    type: 'date',
  })
  creationDate: Date;

  @ApiProperty({
    description: 'Withdraw data',
    default: null,
    type: WithdrawEntity,
  })
  withdraw: WithdrawType;
}
