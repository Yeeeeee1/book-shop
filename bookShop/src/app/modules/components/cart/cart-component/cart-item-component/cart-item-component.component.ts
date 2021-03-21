import { Component, Input, OnInit } from '@angular/core';
import { IBook, Category } from 'src/app/shared/models/BookModel';
import { CartService } from '../../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss'],
})
export class CartItemComponentComponent {
  @Input()
  flag!: boolean;

  @Input()
  term!: keyof IBook;

  basketData: IBook[] = [];
  constructor(private cartService: CartService) {
    this.cartService.clickEvent.subscribe((data) => (this.basketData = data));
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
    console.log(this.basketData);
  }
}
