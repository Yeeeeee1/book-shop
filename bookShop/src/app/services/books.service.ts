import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  onClick: EventEmitter<IBook[]> = new EventEmitter();

  basketData: IBook[] = [];

  removeBook(id: number): void {
    this.basketData.splice(id, 1);
  }

  addBook(book: IBook): void {
    this.basketData.push(book);
    console.log(this.basketData);
    this.onClick.emit(this.basketData);
  }

  constructor() { }
}
