import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  //--> documentacion automatica de swagger
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  //--> CORS para permitir la comunicacion entre el backend y el frontend en distintos puertos
  app.enableCors();
  //--> puerto distinto a 3000 para que no interfiera con el server de next.js
  await app.listen(4000);
}
bootstrap();
