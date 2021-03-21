import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { IBook } from '../../../../shared/models/BookModel';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
})
export class CartComponentComponent {
  totalQuantity = 0;

  totalSum = 0;

  basketData: IBook[] = [];

  flag = false;

  selectedOption: keyof IBook = 'price';

  sort(): void {
    this.flag = !this.flag;
  }

  constructor(private cartService: CartService) {
    this.cartService.clickQuantityEvent.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.cartService.clickSumEvent.subscribe((data) => (this.totalSum = data));
    this.cartService.clickEvent.subscribe((data) => (this.basketData = data));
  }

  removeAll(): void {
    this.cartService.removeAll();
  }
}
