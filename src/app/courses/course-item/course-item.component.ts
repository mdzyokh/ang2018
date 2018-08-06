import { Component, EventEmitter, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input()
  public course: Course;
  @Output()
  public deleteCourse = new EventEmitter<Course>();

  constructor() {
    this.course = {} as Course;
  }

  ngOnInit() {
  }

  deleteCourseHandler(): void {
    this.deleteCourse.emit(this.course);
  }
  
}
