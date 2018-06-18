import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

let courses = [
  { id: 0, title: 'Course#1', creationDate: new Date(2018, 10, 10), description: 'Description#1', durationMin: 30 },
  { id: 1, title: 'Course#2', creationDate: new Date(2019, 1, 5), description: 'Description#2', durationMin: 33 },
  { id: 2, title: 'Course#3', creationDate: new Date(2019, 2, 14), description: 'Description#3', durationMin: 60 },
  { id: 3, title: 'COurse#4', creationDate: new Date(2018, 11, 23), description: 'Description#4', durationMin: 132 },
];

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor() { }

  public getCourses(): Course[] {
    return courses;
  }
}
