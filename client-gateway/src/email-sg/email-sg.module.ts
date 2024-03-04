import { Module } from '@nestjs/common';
import { EmailController } from './email-sg.controller';
import { EmailService } from './email-sg.service';
import { Transport, ClientsModule } from '@nestjs/microservices';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMAIL-SG_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'email-sg-microservice',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'email-sg-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class SGModule {}
