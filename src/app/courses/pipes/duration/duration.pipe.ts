import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    constructor() {}

    transform(value: number): string {
        const hours = ~~(value / 60);
        const minutes = value - (hours * 60);
        return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
    }
}    
