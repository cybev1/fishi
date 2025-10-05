import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  app.enableCors({
    origin: [/\.fishi\.online$/, 'http://localhost:3000', /.*\.vercel\.app$/],
    credentials: true,
  });
  await app.listen(4000, '0.0.0.0');
}
bootstrap();
