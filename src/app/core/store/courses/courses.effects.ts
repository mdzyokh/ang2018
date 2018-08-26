import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import * as CoursesActions from './courses.actions';

import { Observable } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';

import { CoursesService } from '../../../courses/services/courses.service';
import { AppState } from '../app.state';
import { Course } from '../../../courses/models/course.model';

@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private coursesService: CoursesService) {}

  @Effect()
  getCourses$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.GET_COURSES),
    withLatestFrom(this.store$),
    switchMap((action: any) => {
      const search = action.search;
      const pageNumber = action.pageNumber;
      return this.coursesService.getCourses(search, pageNumber).toPromise()
      .then((data: Course[]) => {
        return new CoursesActions.GetCoursesComplete(data);
      })
      .catch(error => new CoursesActions.GetCoursesError(error));
    })
  );

  @Effect()
  addCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.ADD_COURSE),
    switchMap((action: any) => {
      return this.coursesService.createCourse(action.payload).toPromise()
      .then(() => {
        return new CoursesActions.AddCourseComplete();
      })
      .catch(error => new CoursesActions.AddCoursesError(error));
    })
  );

  @Effect()
  updateCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.UPDATE_COURSE),
    switchMap((action: any) => {
      return this.coursesService.updateCourse(action.payload).toPromise()
      .then(() => {
        return new CoursesActions.UpdateCourseComplete();
      })
      .catch(error => new CoursesActions.UpdateCourseError(error));
    })
  );

  @Effect()
  deleteCourse$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.DELETE_COURSE),
    withLatestFrom(this.store$),
    switchMap((action: any) => {
      return this.coursesService.deleteCourse(action.payload).toPromise()
      .then((data: Course) => {
         return new CoursesActions.DeleteCourseComplete(data);
      })
      .catch(error => new CoursesActions.DeleteCourseError(error));
    })
  );
}