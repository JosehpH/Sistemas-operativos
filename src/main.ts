import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app: INestApplication | any = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('LiveBi')
    .setDescription(
      'La implementación de una arquitectura E-Commerce en la nube se espera que tenga un impacto significativo en la resolución de los problemas de caídas de servidores de Crunchyroll. Esta solución no solo debería abordar la incapacidad actual para manejar picos de tráfico, sino que también tiene el potencial de aumentar la satisfacción del cliente al brindar una experiencia de usuario más fluida y confiable.',
    )
    .setVersion('1.0')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(3000);
}
bootstrap();
