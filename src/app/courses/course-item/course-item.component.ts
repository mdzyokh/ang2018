import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter<Course>();

  constructor() { 
    this.course = {} as Course;
  }

  ngOnInit() {
  }

  deleteCourseHandler(): void {
    this.deleteCourse.emit(this.course);
  }

}
