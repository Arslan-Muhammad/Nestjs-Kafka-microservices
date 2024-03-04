export class EmailEvent {
  constructor(
    public readonly email: string,
    public readonly msg: string,
  ) {}
}
