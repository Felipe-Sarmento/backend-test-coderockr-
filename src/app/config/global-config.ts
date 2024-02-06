import { Mode } from './types';

export class GlobalConfig {
  private _mode: Mode;
  private _port: string;

  constructor() {
    this._mode = process.env.NODE_ENV ?? 'local';
    this._port = process.env.PORT ?? '3000';
  }

  mode(): Mode {
    return this._mode;
  }

  port(): string {
    return this._port;
  }
}

export const globalConfig = new GlobalConfig();
