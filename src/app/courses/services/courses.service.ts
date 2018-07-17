import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable, from, of} from 'rxjs';

let courses = [
  { id: 0, title: 'Programming for Data Science', creationDate: new Date(2018, 6, 3), description: 'Learn how to apply fundamental programming concepts, computational thinking and data analysis techniques to solve real-world data science problems.', durationMin: 180, topRated:  true },
  { id: 1, title: 'Object-Oriented Programming', creationDate: new Date(2017, 1, 5), description: 'Learn the principles of programming for building large and extensible systems.', durationMin: 260, topRated: false },
  { id: 2, title: 'Programming for the Web with JavaScript', creationDate: new Date(2016, 2, 14), description: 'Learn how to develop dynamic, interactive, and data-driven web apps using JavaScript.', durationMin: 60, topRated: true },
  { id: 3, title: 'IoT Programming and Big Data', creationDate: new Date(2019, 11, 23), description: 'Learn how to apply software solutions for different systems and Big Data needs to your IoT designs.', durationMin: 132, topRated: false },
];

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(courses);
  }

  createCourse(course: Course): Observable<Course[]> {
    courses.push(course);
    return of(courses);
  }

  findCourseById(id: number): Observable<Course> {
    return of<Course>(courses.find(course => course.id === id));
  }

  updateCourse(course: Course): Observable<Course[]> {
    let index = courses.findIndex(c => c.id === course.id);
    courses[index] = course;
    return of(courses);
  }

  deleteCourse(id: number): Observable<Course> {
    console.log(`Delete course with id=${id}`);
    return of<Course>(courses.splice(courses.findIndex(item => item.id === id), 1).pop());
  }

  searchCourses(query: string) : Observable<Course[]> {
    console.log(`Search courses with name ${query}`);
    return of<Course[]>(courses.filter(course => course.title.toLowerCase().indexOf(query.toLowerCase())!== -1));
  }

  loadMore() {
    console.log(`Load more...`);
  }
}
