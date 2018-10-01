import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter',
})
@Injectable()
export class TableFilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }

        return items.filter(singleItem => {
            if (singleItem[field]) {
                return singleItem[field].toLowerCase().includes(value.toLowerCase())
            }
        });
    }
}