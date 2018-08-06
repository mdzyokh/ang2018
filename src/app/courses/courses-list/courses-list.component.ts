import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courses: Course[];
  constructor(
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses()
      .subscribe(
        courses => this.courses = courses
      );
  }

  deleteCourseHandler(course: Course) {
    if (window.confirm('Do you really want to delete this course ?')) {
      this.coursesService.deleteCourse(course.id).subscribe((data: Course) => {
        this.courses = this.courses.filter(item => item.id !== data.id);
      });
    }
  }

  loadMoreHandler() {
    this.coursesService.loadMore();
  }

  searchCourseHandler(query: string) {
    this.coursesService.searchCourses(query).subscribe(
      courses => this.courses = courses
    );
  }
}
