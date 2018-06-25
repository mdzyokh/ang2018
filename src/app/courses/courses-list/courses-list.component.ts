import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courses: Course[];
  constructor(private service: CoursesService) { }

  ngOnInit() {
    this.courses = this.service.getCourses();
  }

  deleteCourseHandler(course: Course) {
    console.log(`Delete course with id=${course.id}`);
    this.service.deleteCourse(course.id).subscribe((data: Course) => {
      this.courses = this.courses.filter(item => item.id !== data.id);
    });
  }

  loadMoreHandler() {
    console.log(`Load more...`);
  }
}
