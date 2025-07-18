import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!process.env.PORT) {
    throw new Error('PORT is not set');
  }

  await app.listen(process.env.PORT);
}
void bootstrap();
