import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddCourseComponent } from './add-course.component';

describe('AddCourseComponent', () => {
    let component: AddCourseComponent;
    let fixture: ComponentFixture<AddCourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddCourseComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});