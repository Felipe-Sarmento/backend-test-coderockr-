import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilterHandler } from './app/shared/filter/http-exception.filter';
import { globalConfig } from './app/config/global-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Investment API')
    .setDescription('The investment API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.useGlobalFilters(new HttpExceptionFilterHandler());

  await app.listen(globalConfig.port());
}
bootstrap();
