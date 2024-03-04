import { Module } from '@nestjs/common';
import { EmailController } from './email-SMtP.controller';
import { EmailService } from './email-SMTP.service';
import { Transport, ClientsModule } from '@nestjs/microservices';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMAIL-SMTP_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'email-smtp-microservice',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'email-smtp-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class SMTPModule {}
