import { Injectable, EventEmitter } from '@angular/core';
import { IBook } from '../../shared/models/BookModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  basketData: IBook[] = [];

  totalQuantity = 0;

  totalSum = 0;

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  onChangeInput(): void {
    this.updateCartData();
  }

  increaseQuantity(book: IBook): void {
    book.count++;
    this.basketData[this.basketData.indexOf(book)] = book;
    this.updateCartData();
  }

  decreaseQuantity(book: IBook): void {
    if (book.count > 0) {
      book.count--;
      this.basketData[this.basketData.indexOf(book)] = book;
      this.updateCartData();
    }
  }

  removeAll(): void {
    this.basketData = [];
    this.updateCartData();
  }

  removeBook(id: number): void {
    this.basketData.splice(id, 1);
    this.updateCartData();
  }

  addBook(book: IBook): void {
    this.basketData.push(book);
    this.updateCartData();
  }

  getBasketData(): IBook[] {
    return this.basketData;
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
    this.totalSum = currentCost;
  }
}
