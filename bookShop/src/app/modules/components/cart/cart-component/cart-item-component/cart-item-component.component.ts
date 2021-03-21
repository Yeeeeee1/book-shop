import { Component, Input, OnInit } from '@angular/core';
import { IBook, Category } from 'src/app/shared/models/BookModel';
import { CartService } from '../../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss'],
})
export class CartItemComponentComponent implements OnInit {
  basketData: IBook[] = [];
  constructor(private cartService: CartService) {
    this.cartService.clickEvent.subscribe((cnt) => (this.basketData = cnt));
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
