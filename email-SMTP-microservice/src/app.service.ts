import { Injectable } from '@nestjs/common';
import { EmailEvent } from 'src/emailEvent';

@Injectable()
export class AppService {

  emailSend({email, msg}: EmailEvent) {
    console.log(`details are ${email} and ${msg} for email-SMTP`);
  }

}
