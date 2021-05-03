import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook, Category } from '../../shared/models/BookModel';
import { CartService } from './cart.service';

const PRODUCTS: IBook[] = [];

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  products: IBook[] = PRODUCTS;

  getBooks(): Observable<IBook[]> {
    return of(this.products);
  }

  addBook(book: IBook): void {
    this.products.push(book);
  }

  constructor() {}
}
