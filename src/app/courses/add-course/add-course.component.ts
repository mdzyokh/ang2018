import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course.model';

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
        private coursesService: CoursesService) { }

    public close() {
        this.router.navigate(['courses']);
    }

    public save() {
        this.coursesService.createCourse(new Course(Date.now(), this.courseTitle, this.courseDate, this.courseDuration, this.courseDescription, false));
        this.router.navigate(['courses']);
    }
}