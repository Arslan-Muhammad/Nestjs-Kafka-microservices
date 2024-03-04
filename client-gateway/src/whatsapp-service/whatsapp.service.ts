import { Inject, Injectable } from '@nestjs/common';
import { MsgReq } from '../common/msg.req.dto';
import { ClientKafka } from '@nestjs/microservices';
import { MsgEvent } from '../common/msg.event';
import * as CircularJSON from 'circular-json';

@Injectable()
export class WhatsappService {
  constructor(
    @Inject('WHATSAPP_SERVICE') private readonly whatsappClient: ClientKafka,
  ) {}
  sendWhatsapp({ num, msg }: MsgReq) {
    return this.whatsappClient
      .send('Whatsapp', new MsgEvent(num, msg))
      .subscribe((message) => message);
  }
}
