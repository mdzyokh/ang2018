import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course.model';

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
        private coursesService: CoursesService) { }


    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.coursesService.findCourseById(this.id).subscribe((course) => {
                if (course) {
                    this.courseTitle = course.title;
                    this.courseDescription = course.description;
                    this.courseDuration = course.durationMin;
                    this.courseDate = course.creationDate;
                    this.courseAuthors = '';
                    this.topRated = course.topRated;
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
        this.coursesService.updateCourse(new Course(this.id, this.courseTitle, this.courseDate, this.courseDuration, this.courseDescription, this.topRated));
        this.router.navigate(['courses']);
    }
}