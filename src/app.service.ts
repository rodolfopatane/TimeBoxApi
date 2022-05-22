import { Injectable } from '@nestjs/common';
import { IAPIInfo } from './app.interfaces';

@Injectable()
export class AppService {
  getApiInfo(): IAPIInfo {
    return {
      version: 0,
      build: 0,
      last_build: null,
      last_tag: null,
      status: true,
  };
  }
}
