export class EmailEvent {
    constructor(
      public readonly email: string,
      public readonly msg: string,
    ) {}
    toString() {
      return JSON.stringify({
        email: this.email,
        msg: this.msg,
      });
    }
  }
  