import { Controller, Post, Body, Inject, OnModuleInit } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { MsgReq } from '../common/msg.req.dto';
import { ClientKafka } from '@nestjs/microservices';
import * as CircularJSON from 'circular-json';
@Controller()
export class WhatsappController implements OnModuleInit {
  constructor(
    private readonly appService: WhatsappService,
    @Inject('WHATSAPP_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @Post('whatsapp')
  sendWhatsapp(@Body() MsgReq: MsgReq) {
    return CircularJSON.stringify(this.appService.sendWhatsapp(MsgReq));
    // console.log('controller res:', res);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('Whatsapp');
  }
}
