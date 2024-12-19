import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: ['https://kanban-fieldcontrol.netlify.app', 'http://localhost:4200'],
    methods: 'GET,POST', 
    allowedHeaders: 'Content-Type, Accept', 
  });

  await app.listen(process.env.NODE_ENV ? "http://localhost:3000" : process.env.PORT, "0.0.0.0");
}
bootstrap();