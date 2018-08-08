import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';
import { cpus } from 'os';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courses: Course[] = [];
  private query = '';
  private pageNumber: number = 0;

  constructor(
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.fetchCourses();
  }

  deleteCourseHandler(course: Course) {
    if (window.confirm('Do you really want to delete this course ?')) {
      this.coursesService.deleteCourse(course.id).subscribe((data: Course) => {
        this.courses = this.courses.filter(item => item.id !== data.id);
      });
    }
  }

  loadMoreHandler() {
    this.pageNumber++;
    this.fetchCourses();
  }

  searchCourseHandler(query: string) {
    this.courses = [];
    this.query = query;
    this.pageNumber = 0;
    this.fetchCourses();
  }

  private fetchCourses() {
    this.coursesService.getCourses(this.query, this.pageNumber)
      .subscribe(
        (courses) => this.courses = this.courses.concat(courses))
  }
}
