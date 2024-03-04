import { Injectable } from '@nestjs/common';
import { WhatsappEvent } from 'src/whatsappEvent';

@Injectable()
export class AppService {
  WhatsAppSend({ num, msg }: WhatsappEvent) {
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    return client.messages
      .create({
        body: msg,
        from: process.env.WHATSAPP_FROM,
        to: `whatsapp:+${num}`,
      })
      .then((message: any) => JSON.stringify(message));
  }
}
