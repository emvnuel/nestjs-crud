import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ready')
  ready(): string {
    return 'ok';
  }

  @Get('alive')
  alive(): string {
    return 'ok';
  }
}
