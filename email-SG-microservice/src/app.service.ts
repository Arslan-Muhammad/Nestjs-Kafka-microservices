import { Injectable } from '@nestjs/common';
import { EmailEvent } from 'src/emailEvent';

@Injectable()
export class AppService {

  EmailSend({email, msg}: EmailEvent) {
    console.log(`details are ${email} and ${msg} for email-sg`);
  }

}
