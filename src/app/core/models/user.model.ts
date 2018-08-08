import { UserInterface } from './user.interface';

export class User implements UserInterface {
  constructor(
    public id: number,
    public name: {
      first: string,
      last: string,
    },
    public login: string,
    public password: string,
    public fakeToken: string,
  ) {}
}