import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class WhatsappController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('email-smtp')
  emailSent(data: any) {
    return this.appService.emailSend(data);
  }
}
