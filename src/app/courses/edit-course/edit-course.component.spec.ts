import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EditCourseComponent } from './edit-course.component';

describe('AddCourseComponent', () => {
    let component: EditCourseComponent;
    let fixture: ComponentFixture<EditCourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditCourseComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});