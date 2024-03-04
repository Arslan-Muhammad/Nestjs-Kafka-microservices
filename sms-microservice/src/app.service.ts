import { Injectable } from '@nestjs/common';
import { SmsEvent } from 'src/smsEvent';

@Injectable()
export class AppService {
  SmsSend({ num, msg }: SmsEvent) {
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
      .create({
        body: msg,
        from: process.env.SMS_FROM,
        to: `+${num}`,
      })
      .then((message) => message);
  }
}
