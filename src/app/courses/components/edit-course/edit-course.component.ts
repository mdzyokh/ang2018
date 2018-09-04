import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { Subscription } from 'rxjs';
import * as coursesActions from '../../../core/store/courses/courses.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

    public id;
    public courseTitle = '';
    public courseDescription = '';
    public courseDuration = 0;
    public courseDate = new Date();
    public courseAuthors = '';
    public topRated;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private coursesStore: Store<AppState>) { }


    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.coursesStore
                .select(state => state.courses.data)
                .subscribe((courses: Course[]) => {
                    const course = courses.find((item) => item.id === this.id);
                    if (course) {
                        this.courseTitle = course.name;
                        this.courseDescription = course.description;
                        this.courseDuration = course.length;
                        this.courseDate = course.date;
                        this.courseAuthors = '';
                        this.topRated = course.isTopRated;
                    } else {
                        this.router.navigate(['courses']);
                    }
                });
        })
    }

    public close() {
        this.router.navigate(['courses']);
    }

    public save() {
        var course = new Course(this.id, this.courseTitle, this.courseDate, this.courseDuration, this.courseDescription, this.topRated, []);
        this.coursesStore.dispatch(new coursesActions.UpdateCourse(course));
        this.router.navigate(['courses']);
    }
}