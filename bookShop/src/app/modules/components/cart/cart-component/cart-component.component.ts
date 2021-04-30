import { Route } from '@angular/compiler/src/core';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
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

  flag = false;

  selectedOption: keyof IBook = 'price';

  sort(): void {
    this.flag = !this.flag;
  }

  cartServiceQuantitySub: Subscription | null = new Subscription();
  cartServiceSumSub: Subscription | null = new Subscription();
  cartSub: Subscription | null = new Subscription();
  paramSub: Subscription | null = new Subscription();

  constructor(
    private cartService: CartService,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.cartServiceQuantitySub = this.cartService.clickQuantityEvent.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.cartServiceSumSub = this.cartService.clickSumEvent.subscribe(
      (data) => (this.totalSum = data)
    );
    this.cartSub = this.cartService.clickEvent.subscribe(
      (data) => (this.basketData = data)
    );
    if (typeof this.localStorageService.getItem('totalSum') !== 'object') {
      this.totalSum = this.localStorageService.getItem('totalSum');
    }
    if (typeof this.localStorageService.getItem('totalQuantity') !== 'object') {
      this.totalQuantity = this.localStorageService.getItem('totalQuantity');
    }
    this.paramSub = this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id !== null) {
        this.basketData.push(this.booksService.products[Number(id)]);
      }
    });

    if (this.localStorageService.getItem('basketData')) {
      this.basketData = this.localStorageService.getItem('basketData');
    }
  }

  ngOnDestroy(): void {
    if (this.cartServiceQuantitySub) {
      this.cartServiceQuantitySub.unsubscribe();
      this.cartServiceQuantitySub = null;
    }
    if (this.cartServiceSumSub) {
      this.cartServiceSumSub.unsubscribe();
      this.cartServiceSumSub = null;
    }
    if (this.cartSub) {
      this.cartSub.unsubscribe();
      this.cartSub = null;
    }
    if (this.paramSub) {
      this.paramSub.unsubscribe();
      this.paramSub = null;
    }
  }

  removeAll(): void {
    this.cartService.removeAll();
  }
}
