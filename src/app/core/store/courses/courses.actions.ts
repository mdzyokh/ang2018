import { Action } from '@ngrx/store';
import { Course } from '../../../courses/models/course.model';

export enum CoursesActionTypes {
  GET_COURSES = '[Courses] GET_COURSES',
  GET_COURSES_COMPLETE = '[Courses] GET_COURSES_COMPLETE',
  GET_COURSES_ERROR = '[Courses] GET_COURSES_ERROR',
  ADD_COURSE = '[Courses] ADD_COURSE',
  ADD_COURSE_COMPLETE = '[Courses] ADD_COURSES_COMPLETE',
  ADD_COURSE_ERROR = '[Courses] ADD_COURSES_ERROR',
  UPDATE_COURSE = '[Courses] UPDATE_COURSE',
  UPDATE_COURSE_COMPLETE = '[Courses] UPDATE_COURSE_COMPLETE',
  UPDATE_COURSE_ERROR = '[Courses] UPDATE_COURSE_ERROR',
  DELETE_COURSE = '[Courses] DELETE_COURSE',
  DELETE_COURSE_COMPLETE = '[Courses] DELETE_COURSE_COMPLETE',
  DELETE_COURSE_ERROR = '[Courses] DELETE_COURSE_ERROR'
}

export class GetCourses implements Action {
  readonly type = CoursesActionTypes.GET_COURSES;
  constructor(public payload: any) { }
}

export class GetCoursesComplete implements Action {
  readonly type = CoursesActionTypes.GET_COURSES_COMPLETE;
  constructor(public payload: any) { }
}

export class GetCoursesError implements Action {
  readonly type = CoursesActionTypes.GET_COURSES_ERROR;
  constructor(public payload: Error | string) { }
}

export class AddCourse implements Action {
  readonly type = CoursesActionTypes.ADD_COURSE;
  constructor(public payload: Course) { }
}

export class AddCourseComplete implements Action {
  readonly type = CoursesActionTypes.ADD_COURSE_COMPLETE;
  constructor(public payload: Course) { }
}

export class AddCoursesError implements Action {
  readonly type = CoursesActionTypes.ADD_COURSE_ERROR;
  constructor(public payload: Error | string) { }
}

export class UpdateCourse implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE;
  constructor(public payload: Course) { }
}

export class UpdateCourseComplete implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE_COMPLETE;
  constructor(public payload: Course) { }
}

export class UpdateCourseError implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE_ERROR;
  constructor(public payload: Error | string) { }
}

export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE;
  constructor(public payload: any) { }
}

export class DeleteCourseComplete implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_COMPLETE;
  constructor(public payload: any) { }
}

export class DeleteCourseError implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_ERROR;
  constructor(public payload: Error | string) { }
}

export type CoursesActions =
  GetCourses
  | GetCoursesComplete
  | GetCoursesError
  | AddCourse
  | AddCourseComplete
  | AddCoursesError
  | UpdateCourse
  | UpdateCourseComplete
  | UpdateCourseError
  | DeleteCourse
  | DeleteCourseComplete
  | DeleteCourseError;