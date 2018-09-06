import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import * as coursesActions from '../../../core/store/courses/courses.actions';
import { AppState } from '../../../core/store/app.state';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

    public addCourseForm: FormGroup;

    constructor(private router: Router,
        private store: Store<AppState>,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.addCourseForm = this.fb.group({
            title: ['', [Validators.required, Validators.maxLength(50)]],
            description: ['', Validators.maxLength(500)],
            date: [new Date().toISOString()],
            duration: [0],
            authors: ['']
        });
    }

    public close() {
        this.router.navigate(['courses']);
    }

    public save() {
        console.log(this.addCourseForm.value);
        const course = new Course(Date.now(), this.addCourseForm.controls.title.value, this.addCourseForm.controls.date.value,
            this.addCourseForm.controls.duration.value, this.addCourseForm.controls.description.value, false, []);
        this.store.dispatch(new coursesActions.AddCourse(course));
        this.router.navigate(['courses']);
    }
}