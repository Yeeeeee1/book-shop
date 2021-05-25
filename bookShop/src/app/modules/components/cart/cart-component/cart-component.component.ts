import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { CartService } from '../../../../core/services/cart.service';
import { IBook } from '../../../../shared/models/BookModel';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
})
export class CartComponentComponent implements OnInit, OnDestroy {
  totalQuantity = 0;
  totalSum = 0;
  basketData: IBook[] = [];
  booksData: IBook[] = [];
  flag = false;
  selectedOption: keyof IBook = 'price';

  cartServiceQuantitySub: Subscription | null = new Subscription();
  cartServiceSumSub: Subscription | null = new Subscription();
  cartServiceCartData: Subscription | null = new Subscription();

  booksDataSub: Subscription | null = new Subscription();

  constructor(
    private cartService: CartService,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.basketData = this.cartService.getBasketData();
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.totalSum = this.cartService.getTotalSum();
    this.booksDataSub = this.booksService
      .getBooks()
      .subscribe((data) => (this.booksData = data));
    this.cartServiceQuantitySub = this.cartService.clickQuantityEvent.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.cartServiceSumSub = this.cartService.clickSumEvent.subscribe(
      (data) => (this.totalSum = data)
    );
    this.cartServiceCartData = this.cartService.cartChangeEvent.subscribe(
      (data) => (this.basketData = data)
    );
  }

  ngOnDestroy(): void {
    if (this.booksDataSub) {
      this.booksDataSub.unsubscribe();
      this.booksDataSub = null;
    }
    if (this.cartServiceQuantitySub) {
      this.cartServiceQuantitySub.unsubscribe();
      this.cartServiceQuantitySub = null;
    }
    if (this.cartServiceSumSub) {
      this.cartServiceSumSub.unsubscribe();
      this.cartServiceSumSub = null;
    }
    if (this.cartServiceCartData) {
      this.cartServiceCartData.unsubscribe();
      this.cartServiceCartData = null;
    }
  }

  sort(): void {
    this.flag = !this.flag;
  }

  removeAll(): void {
    this.cartService.removeAll(this.booksData);
  }

  removeBook(id: number): void {
    this.booksData[id].isAvailable = true;
    this.cartService.removeBook(id);
  }
}
