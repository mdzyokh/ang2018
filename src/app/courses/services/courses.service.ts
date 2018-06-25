import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable, from, of} from 'rxjs';

let courses = [
  { id: 0, title: 'Programming for Data Science', creationDate: new Date(2018, 10, 10), description: 'Learn how to apply fundamental programming concepts, computational thinking and data analysis techniques to solve real-world data science problems.', durationMin: 180 },
  { id: 1, title: 'Object-Oriented Programming', creationDate: new Date(2017, 1, 5), description: 'Learn the principles of programming for building large and extensible systems.', durationMin: 260 },
  { id: 2, title: 'Programming for the Web with JavaScript', creationDate: new Date(2016, 2, 14), description: 'Learn how to develop dynamic, interactive, and data-driven web apps using JavaScript.', durationMin: 60 },
  { id: 3, title: 'IoT Programming and Big Data', creationDate: new Date(2018, 11, 23), description: 'Learn how to apply software solutions for different systems and Big Data needs to your IoT designs.', durationMin: 132 },
];

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor() { }

  getCourses(): Course[] {
    return courses;
  }

  deleteCourse(id: number): Observable<Course> {
    return of<Course>(courses.splice(courses.findIndex(item => item.id === id), 1).pop());
  }
}
