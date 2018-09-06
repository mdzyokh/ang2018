import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { Subscription } from 'rxjs';
import * as coursesActions from '../../../core/store/courses/courses.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

    public id;
    public topRated = false;
    public updateCourseForm: FormGroup;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private coursesStore: Store<AppState>,
        private fb: FormBuilder) {
        this.updateCourseForm = this.fb.group({
            title: ['', [Validators.required, Validators.maxLength(50)]],
            description: ['', Validators.maxLength(500)],
            date: [new Date().toISOString()],
            duration: [0],
            authors: ['']
        });
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.coursesStore
                .select(state => state.courses.data)
                .subscribe((courses: Course[]) => {
                    const course = courses.find((item) => item.id === this.id);
                    if (course) {
                        this.updateCourseForm.controls.title.setValue(course.name);
                        this.updateCourseForm.controls.description.setValue(course.description);
                        this.updateCourseForm.controls.date.setValue(course.date.toString().substring(0, 10));
                        this.updateCourseForm.controls.duration.setValue(course.length);
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
        const course = new Course(this.id, this.updateCourseForm.controls.title.value, this.updateCourseForm.controls.date.value,
            this.updateCourseForm.controls.duration.value, this.updateCourseForm.controls.description.value, this.topRated,
            this.updateCourseForm.controls.authors.value);
        this.coursesStore.dispatch(new coursesActions.UpdateCourse(course));
        this.router.navigate(['courses']);
    }
}