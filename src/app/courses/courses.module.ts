import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

import { BorderHighlightDirective } from './directives/border-highlight.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByDatePipe } from './pipes/orderBy/order-by-date.pipe';
import { SearchPipe } from './pipes/search/search.pipe';

import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule
  ],
  providers: [DecimalPipe],
  declarations: [CoursesListComponent, CourseItemComponent, ToolboxComponent, BorderHighlightDirective, DurationPipe, OrderByDatePipe, SearchPipe, BreadcrumbsComponent, AddCourseComponent, EditCourseComponent],
  exports: [CoursesListComponent, CourseItemComponent, ToolboxComponent, BorderHighlightDirective, DurationPipe, OrderByDatePipe, SearchPipe, BreadcrumbsComponent, AddCourseComponent, EditCourseComponent],
})
export class CoursesModule { }
