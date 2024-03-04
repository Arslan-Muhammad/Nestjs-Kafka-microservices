import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class WhatsappController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('Whatsapp')
  WhatsAppSent(data: any) {
    return this.appService.WhatsAppSend(data);
  }
}
