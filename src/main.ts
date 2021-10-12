import { NestFactory } from '@nestjs/core';
import Knex  from 'knex';
import { Model } from 'objection';
import { AppModule } from './app.module';
import dbConnection from './config/database.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const knex = Knex(dbConnection);
  Model.knex(knex);
  await app.listen(3000);
}
bootstrap();
