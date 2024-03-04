export class MsgEvent {
  constructor(
    public readonly num: number,
    public readonly msg: string,
  ) {}
  toString() {
    return JSON.stringify({
      num: this.num,
      msg: this.msg,
    });
  }
}
