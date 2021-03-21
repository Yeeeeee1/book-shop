import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../models/BookModel';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: IBook[], term: keyof IBook, flag: boolean = false): IBook[] {
    function compare(a: IBook, b: IBook): number {
      if (a[term] > b[term]) {
        return flag ? -1 : 1;
      }
      if (a[term] < b[term]) {
        return flag ? 1 : -1;
      }
      // a должно быть равным b
      return 0;
    }

    return value.sort((a, b) => compare(a, b));
  }
}
