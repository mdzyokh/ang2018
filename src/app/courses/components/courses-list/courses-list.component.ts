import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';
import { debounceTime, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LoadingService } from '../../../core/loading/services/loading.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courses: Course[] = [];
  public canLoadMore: boolean = true;
  private currentPage: number = 0;
  private searchQuery: Subject<string> = new Subject<string>();

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.searchQuery
      .pipe(
        debounceTime(400),
        tap(() => {
          this.loadingService.show();
          this.courses = [];
          this.currentPage = 0;
        })
      )
      .subscribe(value => {
        this.fetchCourses(value);
      });
    this.loadingService.show();
    this.fetchCourses('');
  }

  deleteCourseHandler(course: Course) {
    if (window.confirm('Do you really want to delete this course ?')) {
      this.loadingService.show();
      this.coursesService.deleteCourse(course.id).subscribe((data: Course) => {
        this.courses = this.courses.filter(item => item.id !== data.id);
        this.loadingService.hide();
      });
    }
  }

  loadMoreHandler() {
    this.currentPage++;
    this.fetchCourses('');
  }

  searchCourseHandler(query: string) {
    this.searchQuery.next(query);
  }

  private fetchCourses(query: string) {
    this.coursesService.getCourses(query, this.currentPage)
      .subscribe(
        (courses) => {
          this.courses = this.courses.concat(courses);
          if (!courses.length) {
            this.canLoadMore = false;
          }
          this.loadingService.hide();
        })
  }
}