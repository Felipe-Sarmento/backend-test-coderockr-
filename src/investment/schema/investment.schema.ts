import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { InvestmentType } from '../model/investment.type';

export type InvestmentDocument = HydratedDocument<Investment>;

@Schema()
export class Investment implements InvestmentType {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  ownerId: string;

  @Prop({ default: Date.now })
  creationDate: Date;

  @Prop({ default: false })
  withdrawn: boolean;

  _id: string;
}

export const InvestmentSchema = SchemaFactory.createForClass(Investment);
