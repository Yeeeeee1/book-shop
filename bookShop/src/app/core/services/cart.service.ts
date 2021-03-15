import { Injectable, EventEmitter } from '@angular/core';
import { IBook, Category } from '../../shared/models/BookModel';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  clickEvent: EventEmitter<IBook[]> = new EventEmitter();

  clickSumEvent: EventEmitter<number> = new EventEmitter();

  clickQuantityEvent: EventEmitter<number> = new EventEmitter();

  removeEvent: EventEmitter<IBook[]> = new EventEmitter();

  booksData: IBook[] = this.booksService.getBooks();

  basketData: IBook[] = [];

  totalQuantity = 0;

  totalSum  = 0;

  constructor(private booksService: BooksService) {}

  onChangeInput(): void {
    this.updateCartData();
  }

  increaseQuantity(book: IBook): void {
    book.count++;
    this.updateCartData();
  }

  decreaseQuantity(book: IBook): void {
    if (book.count > 0) {
      book.count--;
      this.updateCartData();
    }
  }

  removeAll(): void {
    for (const book of this.basketData) {
      this.booksData[book.id].isAvailable = true;
    }
    this.basketData = [];
    this.updateCartData();
  }

  removeBook(id: number): void {
    this.booksData[this.basketData[id].id].isAvailable = true;
    this.basketData.splice(id, 1);
    this.updateCartData();
  }

  addBook(book: IBook): void {
    this.basketData.push(book);
    console.log(this.basketData);
    this.updateCartData();
  }

  updateCartData(): void {
    this.totalQuantity = Number(this.basketData.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0));
    this.totalSum = this.basketData.reduce((accumulator, currentValue) => (accumulator + currentValue.price) * currentValue.count, 0);
    this.clickEvent.emit(this.basketData);
    this.clickSumEvent.emit(this.totalSum);
    this.clickQuantityEvent.emit(this.totalQuantity);
    this.removeEvent.emit(this.booksData);
  }
}
