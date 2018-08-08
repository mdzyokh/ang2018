import {CourseInterface} from './course.interface';
import { Author } from './author.model';

export class Course implements CourseInterface {
  constructor(
    public id: number,
    public name: string,
    public date: Date,
    public length: number,
    public description: string,
    public isTopRated: boolean,
    public authors: Author[],
  ) {}
}