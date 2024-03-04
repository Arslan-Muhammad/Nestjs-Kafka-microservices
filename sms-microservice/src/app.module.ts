import { Module } from '@nestjs/common';
import { WhatsappController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [WhatsappController],
  providers: [AppService],
})
export class WhatsappModule {}
