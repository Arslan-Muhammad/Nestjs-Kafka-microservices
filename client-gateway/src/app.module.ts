import { Module } from '@nestjs/common';
import { SGModule } from './email-sg/email-sg.module';
import { SMTPModule } from './email-SMTP/email-SMTP.module';
import { SmsModule } from './sms-service/sms.module';
import { WhatsAppModule } from './whatsapp-service/whatsapp.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SGModule,
    SMTPModule,
    SmsModule,
    WhatsAppModule,
  ],
})
export class AppModule {}
