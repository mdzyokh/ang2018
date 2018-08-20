import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/course.model';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../core/loading/services/loading.service';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, OnDestroy {

    public id;
    public courseTitle = '';
    public courseDescription = '';
    public courseDuration = 0;
    public courseDate = new Date();
    public courseAuthors = '';
    public topRated;

    private subscriptions: Array<Subscription> = [];

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private coursesService: CoursesService,
        private loadingService: LoadingService) { }


    ngOnInit(): void {
        this.loadingService.show();
        this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.coursesService.findCourseById(this.id).subscribe((course: Course) => {
                if (course) {
                    this.courseTitle = course.name;
                    this.courseDescription = course.description;
                    this.courseDuration = course.length;
                    this.courseDate = course.date;
                    this.courseAuthors = '';
                    this.topRated = course.isTopRated;
                    this.loadingService.hide();
                } else {
                    this.loadingService.hide();
                    this.router.navigate(['courses']);
                }
            });
        }))
    }

    public close() {
        this.router.navigate(['courses']);
    }

    public save() {
        this.loadingService.show()
        var course = new Course(this.id, this.courseTitle, this.courseDate, this.courseDuration, this.courseDescription, this.topRated, []);
        this.subscriptions.push(this.coursesService.updateCourse(course).subscribe(() => {
            this.loadingService.hide();
            this.router.navigate(['courses']);
        }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }
}