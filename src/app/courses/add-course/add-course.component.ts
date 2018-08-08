import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnDestroy {

    public courseTitle = '';
    public courseDescription = '';
    public courseDuration = 0;
    public courseDate = new Date();
    public courseAuthors = '';

    private createCourseSubscription: Subscription;

    constructor(private router: Router,
        private coursesService: CoursesService) { }

    public close() {
        this.router.navigate(['courses']);
    }

    public save() {
        var course = new Course(Date.now(), this.courseTitle, this.courseDate, this.courseDuration, this.courseDescription, false, []);
        this.createCourseSubscription = this.coursesService.createCourse(course).subscribe(() => {
            this.router.navigate(['courses']);
        });

    }

    ngOnDestroy(): void {
        this.createCourseSubscription.unsubscribe();
    }
}