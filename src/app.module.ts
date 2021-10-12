import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './controller/customer.controller';
import { CustomerRepository } from './repository/customer.repository';

@Module({
  imports: [],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerRepository],
})
export class AppModule {}
