import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { IBook } from '../../../../shared/models/BookModel';
import { OrderByPipe } from '../../../../shared/pipes/order-by.pipe';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
})
export class CartComponentComponent {
  orderbypipe = new OrderByPipe();

  totalQuantity = 0;

  totalSum = 0;

  basketData: IBook[] = [];

  flag = false;

  selectedOption: keyof IBook = 'price';

  sort(): void {
    this.flag = !this.flag;
    this.basketData = this.orderbypipe.transform(
      this.basketData,
      this.selectedOption,
      this.flag
    );
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
