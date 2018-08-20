import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input()
  public course: Course = {} as Course;
  @Output()
  public deleteCourse = new EventEmitter<Course>();

  deleteCourseHandler(): void {
    this.deleteCourse.emit(this.course);
  }
}
