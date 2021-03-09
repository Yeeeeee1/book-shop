import { Injectable, EventEmitter } from '@angular/core';
import { IBook, Category } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  clickEvent: EventEmitter<IBook[]> = new EventEmitter();

  basketData: IBook[] = [];

  removeBook(id: number): void {
    this.basketData.splice(id, 1);
  }

  addBook(book: IBook): void {
    this.basketData.push(book);
    console.log(this.basketData);
    this.clickEvent.emit(this.basketData);
  }

  constructor() { }
}
