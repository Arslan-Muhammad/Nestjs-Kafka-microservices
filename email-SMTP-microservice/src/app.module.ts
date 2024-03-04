import { Module } from '@nestjs/common';
import { WhatsappController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [WhatsappController],
  providers: [AppService],
})
export class WhatsappModule {}
