import {CourseInterface} from './course.interface';

export class Course implements CourseInterface {
  constructor(
    public id: number,
    public title: string,
    public creationDate: Date,
    public durationMin: number,
    public description: string,
    public topRated: boolean,
  ) {}
}