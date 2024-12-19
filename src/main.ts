import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'https://kanban-fieldcontrol.netlify.app',
    methods: 'GET,POST', 
    allowedHeaders: 'Content-Type, Accept', 
  });

  await app.listen(process.env.PORT, "0.0.0.0");
}
bootstrap();