import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../models/course.model';

@Pipe({ name: 'orderByDate' })
export class OrderByDatePipe implements PipeTransform {
  transform(allCourses: Course[]) {
    return allCourses.sort((c1: Course, c2: Course) => {
        return new Date(c2.date).getTime() - new Date(c1.date).getTime();
    });
  }
}