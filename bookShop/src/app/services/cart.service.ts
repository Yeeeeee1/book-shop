import { Injectable, EventEmitter } from '@angular/core';
import { IBook, Category } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  clickEvent: EventEmitter<IBook[]> = new EventEmitter();

  basketData: IBook[] = [];

  totalQuantity: number = this.basketData.length; // need to update in special function

  totalSum: number = this.basketData.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0); // need to update in special function

  removeBook(id: number): void {
    this.basketData[id].isAvailable = true;
    this.basketData.splice(id, 1);
  }

  addBook(book: IBook): void {
    this.basketData.push(book);
    console.log(this.basketData);
    this.clickEvent.emit(this.basketData);
  }

  constructor() {
    setTimeout(() => {
      console.log(this.totalSum, this.basketData);
    }, 3000);
  }
}
