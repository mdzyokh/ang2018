import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../models/course.model';

@Pipe({ name: 'orderByDate' })
export class OrderByDatePipe implements PipeTransform {
  transform(allCourses: Course[]) {
    return allCourses.sort((c1: Course, c2: Course) => {
        return c2.creationDate.getTime() - c1.creationDate.getTime();
    });
  }
}