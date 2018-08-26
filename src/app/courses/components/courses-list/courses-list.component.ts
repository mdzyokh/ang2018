import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import * as coursesActions from '../../../core/store/courses/courses.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courses$: Observable<ReadonlyArray<Course>>;
  public canLoadMore: boolean = true;
  private currentPage: number = 0;

  constructor(
    private coursesStore: Store<AppState>) { }

  ngOnInit() {
    this.courses$ = this.coursesStore
      .select(state => state.courses.data);
    this.coursesStore.dispatch(new coursesActions.GetCourses({ query: '', pageNumber: this.currentPage }));
  }

  deleteCourseHandler(course: Course) {
    if (window.confirm('Do you really want to delete this course ?')) {
      this.coursesStore.dispatch(new coursesActions.DeleteCourse(course.id));
    }
  }

  loadMoreHandler() {
    this.currentPage++;
    this.coursesStore.dispatch(new coursesActions.GetCourses({ query: '', pageNumber: this.currentPage }));
  }

  searchCourseHandler(query: string) {
    this.currentPage = 0;
    this.coursesStore.dispatch(new coursesActions.GetCourses({ query: query, pageNumber: this.currentPage }));
  }
}
