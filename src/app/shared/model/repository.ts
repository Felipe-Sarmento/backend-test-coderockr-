export interface Repository<T> {
  getAll(): Promise<T[]>;
  get(...args: any[]): Promise<any>;
  add(...args: any[]): Promise<any>;
  update(...args: any[]): Promise<any>;
  delete(...args: any[]): Promise<any>;
}
