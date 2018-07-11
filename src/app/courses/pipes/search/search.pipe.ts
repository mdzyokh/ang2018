import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../models/course.model';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
  
    transform(allItems: Course[], query: string): Course[] {
        return allItems.filter((item) => ((item.title.toLowerCase()).indexOf(query.toLowerCase()) !== -1));  
    }
}