import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Permitir apenas o frontend do Angular
    methods: 'GET,POST', // Métodos permitidos
    allowedHeaders: 'Content-Type, Accept', // Cabeçalhos permitidos
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();