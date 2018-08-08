import {AuthorInterface} from './author.interface';

export class Author implements AuthorInterface {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
  ) {}
}