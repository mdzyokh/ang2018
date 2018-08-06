import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs = '';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.routerState.snapshot.url.split('/');
        const id = +currentUrl[currentUrl.length - 1];
        if (id) {
          this.coursesService.findCourseById(id).subscribe((course) => {
            if (course) {
              this.breadcrumbs = ` / ${course.title}`;
            } else {
              this.breadcrumbs = '';
            }
          });
        } else if (currentUrl[currentUrl.length - 1] === 'new') {
          this.breadcrumbs = ' / Add new course';
        } else {
          this.breadcrumbs = '';
        }
      }
    });
  }

}
