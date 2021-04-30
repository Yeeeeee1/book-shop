import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { IBook, Category } from 'src/app/shared/models/BookModel';
import { CartService } from '../../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss'],
})
export class CartItemComponentComponent implements OnInit, OnDestroy {
  @Input()
  flag!: boolean;

  @Input()
  term!: keyof IBook;

  cartSub: Subscription | null = new Subscription();
  paramSub: Subscription | null = new Subscription();

  basketData: IBook[] = [];
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.clickEvent.subscribe(
      (data) => (this.basketData = data)
    );
    this.paramSub = this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id !== null) {
        this.basketData.push(this.booksService.products[Number(id)]);
      }
    });

    if (this.localStorageService.getItem('basketData')[0]) {
      this.basketData = this.localStorageService.getItem('basketData');
    }
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
      this.cartSub = null;
    }
    if (this.paramSub) {
      this.paramSub.unsubscribe();
      this.paramSub = null;
    }
  }

  onChangeInput(): void {
    this.cartService.onChangeInput();
  }

  increaseQuantity(book: IBook): void {
    this.cartService.increaseQuantity(book);
  }

  decreaseQuantity(book: IBook): void {
    this.cartService.decreaseQuantity(book);
  }

  removeBook(id: number): void {
    this.cartService.removeBook(id);
  }
}
