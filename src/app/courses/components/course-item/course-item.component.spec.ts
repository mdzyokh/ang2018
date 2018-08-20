import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Course } from '../models/course.model';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../pipes/duration/duration.pipe';
import { BorderHighlightDirective } from '../directives/border-highlight.directive';
import { DecimalPipe } from '@angular/common';

const course: Course = {
  id: 0,
  title: 'Stub title',
  creationDate: new Date(12,12,1212),
  durationMin: 60,
  description: 'Stub description',
  topRated: false
};
const onDeleteSpy = jasmine.createSpy('onDeleteSpy');

@Component({
  template: '<app-course-item [course]="course" (deleteCourse)="onDeleteClick($event)"></app-course-item>'
})
class TestHostComponent {
  public course: Course = course;

  onDeleteClick() {
    onDeleteSpy();
  }
}

describe('CourseItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, CourseItemComponent, DurationPipe, BorderHighlightDirective ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [DecimalPipe],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
    onDeleteSpy.calls.reset();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should invoke deleteCourse() when deleteCourseHandler() called', () => {
    const tus = new CourseItemComponent();
    tus.course = course;
    spyOn(tus.deleteCourse, 'emit');

    tus.deleteCourseHandler();

    expect(tus.deleteCourse.emit).toHaveBeenCalledTimes(1);
    expect(tus.deleteCourse.emit).toHaveBeenCalledWith(course);
  });

  it('should call onDeleteClick() method on "Delete" button click', () => {
    const deleteButton = fixture.debugElement.query(By.css('.btn-outline-dark'));
    deleteButton.triggerEventHandler('click', null);

    expect(onDeleteSpy).toHaveBeenCalledTimes(1);
  });
});
