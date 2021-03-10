import { Injectable, EventEmitter } from '@angular/core';
import { IBook, Category } from '../models/BookModel';
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

  totalQuantity: number = 0;

  totalSum: number = 0;

  onChangeInput(): void {
    this.updateCartData();
    this.clickSumEvent.emit(this.totalSum);
    this.clickQuantityEvent.emit(this.totalQuantity);
    console.log(this.totalSum, this.totalQuantity);
  }

  increaseQuantity(book: IBook): void {
    book.count++;
    this.updateCartData();
    this.clickSumEvent.emit(this.totalSum);
    this.clickQuantityEvent.emit(this.totalQuantity);
  }

  decreaseQuantity(book: IBook): void {
    if (book.count > 0) {
      book.count--;
      this.updateCartData();
      this.clickSumEvent.emit(this.totalSum);
      this.clickQuantityEvent.emit(this.totalQuantity);
    }
  }

  removeAll(): void {
    for (let i = 0; i < this.basketData.length; i++) {
      this.booksData[this.basketData[i].id].isAvailable = true;
    }
    this.basketData = [];
    this.updateCartData();
    this.clickEvent.emit(this.basketData);
    this.clickSumEvent.emit(this.totalSum);
    this.clickQuantityEvent.emit(this.totalQuantity);
    this.removeEvent.emit(this.booksData);
  }

  removeBook(id: number): void {
    this.booksData[this.basketData[id].id].isAvailable = true;
    this.basketData.splice(id, 1);
    this.updateCartData();
    this.clickEvent.emit(this.basketData);
    this.clickSumEvent.emit(this.totalSum);
    this.clickQuantityEvent.emit(this.totalQuantity);
    this.removeEvent.emit(this.booksData);
  }

  addBook(book: IBook): void {
    this.basketData.push(book);
    console.log(this.basketData);
    this.updateCartData();
    this.clickEvent.emit(this.basketData);
    this.clickSumEvent.emit(this.totalSum);
    this.clickQuantityEvent.emit(this.totalQuantity);
  }

  updateCartData(): void {
    this.totalQuantity = Number(this.basketData.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0));
    this.totalSum = this.basketData.reduce((accumulator, currentValue) => (accumulator + currentValue.price) * currentValue.count, 0);
  }

  constructor(private booksService: BooksService) {
    
  }
}
