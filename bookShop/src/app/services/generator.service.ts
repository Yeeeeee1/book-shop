import { Injectable } from '@angular/core';

const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  GeneratorFactory(n: number): string {
    const arr: string[] = [];
    arr.length = n;
    const newArr: string[] = [];
    const randomArr = SYMBOLS.split('');
    for (let item of arr) {
      item = randomArr[Math.floor(Math.random() * randomArr.length)];
      newArr.push(item);
    }

    return newArr.join('');
  }

  constructor() { }
}
