import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_URl = 'http://localhost:3004/';
const PAGE_SIZE = 4;
const DELAY_MS = 500;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(textFragment: string, pageNumber: number = 0): Observable<Course[]> {
    const start = pageNumber * PAGE_SIZE + '';
    const count = PAGE_SIZE + '';
    return this.http.get<Course[]>(`${API_URl}courses`, { params: { textFragment, start, count } }).pipe(delay(DELAY_MS));
  }

  createCourse(course: Course): Observable<Course> {
    const url = `${API_URl}courses`;
    return this.http.post<Course>(url, course);
  }

  findCourseById(id: number): Observable<Course> {
    const url = `${API_URl}courses/${id}`;
    return this.http.get<Course>(url);
  }

  updateCourse(course: Course) {
    const url = `${API_URl}courses/${course.id}`;
    return this.http.put(url, course);
  }

  deleteCourse(id: number) {
    const url = `${API_URl}courses/${id}`;
    return this.http.delete(url);
  }
}
