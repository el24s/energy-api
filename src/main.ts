import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { configureSwagger } from './configure-swagger';
// import configureAp

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // configureApp(app);
  
  // rajouter le préfix /api devant toutes les routes
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  
  configureSwagger(app);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
