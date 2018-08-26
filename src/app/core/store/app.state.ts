import { AuthState } from './auth/auth.state';
import { CoursesState } from './courses/courses.state';

export interface AppState {
  courses: CoursesState;
  auth: AuthState;
}