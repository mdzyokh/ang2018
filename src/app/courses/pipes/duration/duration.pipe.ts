import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    constructor(private decimalPipe: DecimalPipe) {}

    transform(value: number): string {
        const hours = ~~(value / 60);
        const minutes = this.decimalPipe.transform(value - (hours * 60), '2.0-0');
        return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
    }
}    
