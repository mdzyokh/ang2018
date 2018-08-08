import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_URl = 'http://localhost:3004/';
const PAGE_SIZE = 4;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(textFragment: string, pageNumber: number = 0): Observable<Course[]> {
    const start = pageNumber * PAGE_SIZE + '';
    const count = PAGE_SIZE + '';
    return this.http.get<Course[]>(`${API_URl}courses`, { params: { textFragment, start, count } });
  }

  createCourse(course: Course) {
    const url = `${API_URl}courses`;
    return this.http.post(url, course);
  }

  findCourseById(id: number): Observable<Course> {
    const url = `${API_URl}courses/${id}`;
    return this.http.get<Course>(url);
  }

  updateCourse(course: Course) {
    const url = `${API_URl}courses/${course.id}`;
    return this.http.put(url, course);
  }

  deleteCourse(id: number): Observable<Course> {
    const url = `${API_URl}courses/${id}`;
    return this.http.delete<Course>(url);
  }
}
