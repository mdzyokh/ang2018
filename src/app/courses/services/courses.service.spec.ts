import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
    spyOn(console, 'log');
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  it('should provide list of courses', (done: DoneFn) => {
    const service = new CoursesService();
    const courses = service.getCourses();

    expect(courses instanceof Observable).toBeTruthy();

    courses.subscribe(items => {
      expect(Array.isArray(items)).toBeTruthy();

      done();
    });
  });

  it('deleteCourse() should return item removed', (done: DoneFn) => {
    const service = new CoursesService();
    const course = service.deleteCourse(0);

    expect(course instanceof Observable).toBeTruthy();
    course.subscribe(item => {
      expect(item).toBeTruthy();

      done();
    });
  });

  it('deleteCourse() should log removed course id', inject([CoursesService], (service: CoursesService) => {
    service.deleteCourse(0);

    expect(console.log).toHaveBeenCalledTimes(1);
  }));

  it('loadMore() should log message', inject([CoursesService], (service: CoursesService) => {
    service.loadMore();

    expect(console.log).toHaveBeenCalledTimes(1);
  }));

  it('searchCourses() should log query string', inject([CoursesService], (service: CoursesService) => {
    service.searchCourses('');

    expect(console.log).toHaveBeenCalledTimes(1);
  }));
});
