import { Inject, Injectable } from '@nestjs/common';
import { MsgReq } from '../common/msg.req.dto';
import { ClientKafka } from '@nestjs/microservices';
import { MsgEvent } from '../common/msg.event';

@Injectable()
export class SmsService {
  constructor(
    @Inject('SMS_SERVICE') private readonly smsClient: ClientKafka
  ){}

  sendSms({num, msg}: MsgReq){
    this.smsClient.emit('sms',
      new MsgEvent(num, msg)
    )
  };

}
