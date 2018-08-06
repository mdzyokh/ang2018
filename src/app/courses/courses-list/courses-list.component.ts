import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {

  public courses: Course[];
  constructor(private router: Router, 
              private authService: AuthService, 
              private coursesService: CoursesService) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
        this.router.navigate['/auth'];
    } else {
      this.coursesService.getCourses()
      .subscribe(
        courses => this.courses = courses
      );
    }
  }

  deleteCourseHandler(course: Course) {
    if(window.confirm('Do you really want to delete this course ?')){
      this.coursesService.deleteCourse(course.id).subscribe((data: Course) => {
        this.courses = this.courses.filter(item => item.id !== data.id);
      });
     }
  }

  loadMoreHandler() {
    this.coursesService.loadMore();
  }

  searchCourseHandler(query: string) {
    this.coursesService.searchCourses(query).subscribe(
      courses => this.courses = courses
    );
  }
}
