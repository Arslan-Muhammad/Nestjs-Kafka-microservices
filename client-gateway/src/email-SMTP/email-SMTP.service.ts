import { Inject, Injectable } from '@nestjs/common';
import { EmailReq } from '../common/emial.req.dto';
import { ClientKafka } from '@nestjs/microservices';
import { EmailEvent } from '../common/email.event';

@Injectable()
export class EmailService {
  constructor(
    @Inject('EMAIL-SMTP_SERVICE') private readonly emailClient: ClientKafka
  ){}

  sendEmail({email, msg}: EmailReq){
    this.emailClient.emit('email-smtp',
      new EmailEvent(email, msg)
    )
  }
}
