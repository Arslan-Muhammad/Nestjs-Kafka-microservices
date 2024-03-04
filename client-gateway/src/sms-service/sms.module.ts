import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';
import { Transport, ClientsModule } from '@nestjs/microservices';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SMS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'sms-microservice',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'sms-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [SmsController],
  providers: [SmsService],
})
export class SmsModule {}
