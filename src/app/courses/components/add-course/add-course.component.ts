import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { Subscription } from 'rxjs';
import * as coursesActions from '../../../core/store/courses/courses.actions';
import { AppState } from '../../../core/store/app.state';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

    public courseTitle = '';
    public courseDescription = '';
    public courseDuration = 0;
    public courseDate = new Date();
    public courseAuthors = '';

    constructor(private router: Router,
        private store: Store<AppState>) { }

    public close() {
        this.router.navigate(['courses']);
    }

    public save() {
        var course = new Course(Date.now(), this.courseTitle, this.courseDate, this.courseDuration, this.courseDescription, false, []);
        this.store.dispatch(new coursesActions.AddCourse(course));
        this.router.navigate(['courses']);
    }
}