import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  // Configurar CORS
  app.enableCors({
    origin: 'http://localhost:4200/', // Substitua pelo domínio do frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.init();
}

bootstrap();

// Exportar o Express server para ser usado pelo Vercel
export default server;