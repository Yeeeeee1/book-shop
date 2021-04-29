import { Injectable, EventEmitter } from '@angular/core';
import { IBook, Category } from '../../shared/models/BookModel';
import { BooksService } from './books.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  clickEvent: EventEmitter<IBook[]> = new EventEmitter();

  clickSumEvent: EventEmitter<number> = new EventEmitter();

  clickQuantityEvent: EventEmitter<number> = new EventEmitter();

  removeEvent: EventEmitter<IBook[]> = new EventEmitter();

  booksData!: IBook[];

  basketData: IBook[] = [];

  totalQuantity = 0;

  totalSum = 0;

  constructor(
    private booksService: BooksService,
    private localStorageService: LocalStorageService
  ) {
    this.booksService.getBooks().subscribe((data) => (this.booksData = data));
  }

  onChangeInput(): void {
    this.updateCartData();
  }

  increaseQuantity(book: IBook): void {
    book.count++;
    this.booksData[book.id] = book;
    this.basketData[this.basketData.indexOf(book)] = book;
    this.updateCartData();
  }

  decreaseQuantity(book: IBook): void {
    if (book.count > 0) {
      book.count--;
      this.booksData[book.id] = book;
      this.basketData[this.basketData.indexOf(book)] = book;
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
    this.basketData = this.localStorageService.getItem('basketData');
    this.booksData = this.localStorageService.getItem('booksData');
    this.booksData[this.basketData[id].id].isAvailable = true;
    this.basketData.splice(id, 1);
    this.updateCartData();
  }

  addBook(book: IBook): void {
    this.basketData.push(book);
    this.booksData[book.id] = book;
    this.updateCartData();
  }

  updateCartData(): void {
    this.totalQuantity = Number(
      this.basketData.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0
      )
    );
    let currentCost = 0;
    for (const book of this.basketData) {
      currentCost += book.count * book.price;
    }
    this.localStorageService.setItem('totalQuantity', this.totalQuantity);
    this.localStorageService.setItem('totalSum', currentCost);
    this.localStorageService.setItem('basketData', this.basketData);
    this.localStorageService.setItem('booksData', this.booksData);
    this.clickEvent.emit(this.basketData);
    this.clickSumEvent.emit(currentCost);
    this.clickQuantityEvent.emit(this.totalQuantity);
    this.removeEvent.emit(this.booksData);
  }
}
