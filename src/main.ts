import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { configureSwagger } from './configure-swagger';
// import configureAp

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // configureApp(app);
  
  // rajouter le préfix /api devant toutes les routes
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: false,
    }),
  );
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  
  
  configureSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
