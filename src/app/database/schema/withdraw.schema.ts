import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { WithdrawType } from 'src/app/investment/model/withdraw.type';

export type WithdrawDocument = HydratedDocument<Withdraw>;

@Schema()
export class Withdraw implements WithdrawType {
  _id: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  interestBeforeTax: number;

  @Prop({ default: Date.now })
  withdrawDate: Date;

  @Prop({ required: true })
  taxPercentage: number;

  @Prop({ required: true })
  investmentId: string;
}

export const WithdrawSchema = SchemaFactory.createForClass(Withdraw);
