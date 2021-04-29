import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BooksService } from 'src/app/core/services/books.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { IBook, Category } from 'src/app/shared/models/BookModel';
import { CartService } from '../../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss'],
})
export class CartItemComponentComponent implements OnInit {
  @Input()
  flag!: boolean;

  @Input()
  term!: keyof IBook;

  basketData: IBook[] = [];
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private localStorageService: LocalStorageService
  ) {
    this.cartService.clickEvent.subscribe((data) => (this.basketData = data));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id !== null) {
        this.basketData.push(this.booksService.products[Number(id)]);
      }
    });

    if (this.localStorageService.getItem('basketData')[0]) {
      this.basketData = this.localStorageService.getItem('basketData');
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
