import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

    public courseTitle = '';
    public courseDescription = '';
    public courseDuration = 0;
    public courseDate = '';
    public courseAuthors = '';

    public close() {}

    public save() {}
}