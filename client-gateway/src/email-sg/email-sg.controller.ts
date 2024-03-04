import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email-sg.service';
import { EmailReq} from '../common/emial.req.dto'

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) { }
  
  @Post("/email-sg")
  sendWhatsapp(@Body() EmailReq:EmailReq){
    this.emailService.sendEmail(EmailReq)
  } 

}
