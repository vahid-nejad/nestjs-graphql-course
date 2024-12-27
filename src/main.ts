import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EntityNotFoundErrorFilter } from './filters/entity-not-found/entity-not-found.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new EntityNotFoundErrorFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
