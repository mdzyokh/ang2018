import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesListComponent, CourseItemComponent, ToolboxComponent],
  exports: [CoursesListComponent, CourseItemComponent, ToolboxComponent],
})
export class CoursesModule { }
