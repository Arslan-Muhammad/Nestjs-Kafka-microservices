import { Controller, Post, Body } from '@nestjs/common';
import { SmsService } from './sms.service';
import { MsgReq } from '../common/msg.req.dto';

@Controller()
export class SmsController {
  constructor(private readonly smsService: SmsService) { }

  @Post("sms")
  sendSms(@Body() MsgReq: MsgReq) {
    this.smsService.sendSms(MsgReq)
  }

}
