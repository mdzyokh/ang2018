import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Output, EventEmitter, Input } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../../auth/services/auth.service';
import { By } from '@angular/platform-browser';
import { Course } from '../models/course.model';
import { OrderByDatePipe } from '../pipes/orderBy/order-by-date.pipe';
import { Router } from '@angular/router';

const course =
{
  id: 0,
  title: 'Stub title',
  creationDate: new Date(12, 12, 1212),
  durationMin: 60,
  description: 'Stub description',
  topRated: false
};
const getCourses = jasmine.createSpy('getCourses').and.returnValue(of([course]))
const deleteCourse = jasmine.createSpy('deleteCourse');
const loadMore = jasmine.createSpy('loadMore');
const searchCourses = jasmine.createSpy('searchCourses');
const coursesServiceStub: Partial<CoursesService> = {
  getCourses,
  deleteCourse,
  loadMore,
  searchCourses
};

@Component({
  selector: 'app-course-item',
  template: '<button class="delete-course" (click)="onClick()"></button>'
})
class CourseItemStubComponent {
  @Input()
  public item: Course;
  @Output()
  public deleteCourse: EventEmitter<Course> = new EventEmitter<Course>();

  onClick() {
    this.deleteCourse.emit(course);
  }
}

@Component({
  selector: 'app-toolbox',
  template: '<button class="search" (click)="onClick()"></button>'
})
class ToolboxStubComponent {
  @Output()
  public searchHandler: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.searchHandler.emit('query');
  }
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent, ToolboxStubComponent, CourseItemStubComponent, OrderByDatePipe],
      providers: [
        { provide: CoursesService, useValue: coursesServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    getCourses.calls.reset();
    deleteCourse.calls.reset();
    loadMore.calls.reset();
    searchCourses.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service method searchCourse() on toolbox searchHandler() event', () => {
    const searchButton = fixture.debugElement.query(By.css('.search'));
    searchButton.triggerEventHandler('click', null);

    expect(coursesServiceStub.searchCourses).toHaveBeenCalledTimes(1);
  });

  it('should call service method deleteCourse() on course deleteCourse() event', () => {
    const removeButton = fixture.debugElement.query(By.css('.btn-outline-dark'));
    removeButton.triggerEventHandler('click', null);

    expect(coursesServiceStub.deleteCourse).toHaveBeenCalledTimes(1);
  });

  it('should call service method loadMore() on "LOAD MORE" button click', () => {
    const loadMoreButton = fixture.debugElement.query(By.css('.btn-secondary'));
    loadMoreButton.triggerEventHandler('click', null);

    expect(coursesServiceStub.loadMore).toHaveBeenCalledTimes(1);
  });
});
