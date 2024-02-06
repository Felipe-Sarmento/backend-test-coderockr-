import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { InvestmentType } from '../../investment/model/investment.type';
import { WithdrawType } from 'src/app/investment/model/withdraw.type';
import { WithdrawEntity } from 'src/app/investment/dto/withdraw.model';

export type InvestmentDocument = HydratedDocument<Investment>;

@Schema()
export class Investment implements InvestmentType {
  @Prop({ required: true })
  initialInvestment: number;

  @Prop({ required: true })
  ownerId: string;

  @Prop({ default: Date.now })
  creationDate: Date;

  @Prop({ default: null, type: WithdrawEntity })
  withdraw: WithdrawType;

  _id: string;
}

export const InvestmentSchema = SchemaFactory.createForClass(Investment);
