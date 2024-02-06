import { Repository } from '../../shared/model/repository';
import { Injectable } from '@nestjs/common';
import { Withdraw } from '../schema/withdraw.schema';

@Injectable()
export class WithdrawRepository implements Repository<Withdraw> {
  get(...args: any[]): Promise<any> {
    throw new Error('Method not implemented.');
  }
  add(...args: any[]): Promise<any> {
    throw new Error('Method not implemented.');
  }
  update(...args: any[]): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(...args: any[]): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Withdraw[]> {
    throw new Error('Method not implemented.');
  }
}
