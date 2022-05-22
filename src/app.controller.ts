import { Controller, Get } from '@nestjs/common';
import { IAPIInfo } from './app.interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/info')
  getApiInfo(): IAPIInfo {
    return this.appService.getApiInfo();
  }
}
