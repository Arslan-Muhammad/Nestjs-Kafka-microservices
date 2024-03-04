import { NestFactory } from '@nestjs/core';
import { WhatsappModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WhatsappModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'sms-consumer',
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
