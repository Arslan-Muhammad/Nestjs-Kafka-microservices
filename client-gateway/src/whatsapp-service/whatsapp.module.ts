import { Module } from '@nestjs/common';
import { WhatsappController } from './whatsapp.controller';
import { WhatsappService } from './whatsapp.service';
import { Transport, ClientsModule } from '@nestjs/microservices';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WHATSAPP_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'whatsapp-microservice',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'whatsapp-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [WhatsappController],
  providers: [WhatsappService],
})
export class WhatsAppModule {}
