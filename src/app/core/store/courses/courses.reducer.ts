import { CoursesActionTypes, CoursesActions } from './courses.actions';
import { CoursesState, initialCourseState } from './courses.state';
import { Course } from '../../../courses/models/course.model';

export function coursesReducer(state = initialCourseState, action: CoursesActions): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.GET_COURSES: {
      return { ...state, loading: true };
    }
    case CoursesActionTypes.GET_COURSES_COMPLETE: {
      const data = action.payload;
      return {
        ...state,
        data,
        loading: false
      };
    }
    case CoursesActionTypes.GET_COURSES_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error
      };
    }
    case CoursesActionTypes.ADD_COURSE: {
      return { ...state, loading: true };
    }
    case CoursesActionTypes.ADD_COURSE_COMPLETE: {
      return { ...state, loading: false };
    }
    case CoursesActionTypes.ADD_COURSE_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error
      };
    }
    case CoursesActionTypes.UPDATE_COURSE: {
      return { ...state, loading: true };
    }
    case CoursesActionTypes.UPDATE_COURSE_COMPLETE: {
      return { ...state, loading: false };
    }
    case CoursesActionTypes.UPDATE_COURSE_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error
      };
    }
    case CoursesActionTypes.DELETE_COURSE: {
      return { ...state, loading: true };
    }
    case CoursesActionTypes.DELETE_COURSE_COMPLETE: {
      const deletedId = action.payload;
      const data = state.data.filter(item => item.id !== deletedId);
      return {
        ...state,
        data,
        loading: false,
      };
    }
    case CoursesActionTypes.DELETE_COURSE_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error
      };
    }
    default:
      return state;
  }
}