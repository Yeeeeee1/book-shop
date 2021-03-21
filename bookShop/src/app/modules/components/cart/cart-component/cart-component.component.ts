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
export class CartComponentComponent implements OnInit {
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
      (cnt) => (this.totalQuantity = cnt)
    );
    this.cartService.clickSumEvent.subscribe((cnt) => (this.totalSum = cnt));
    this.cartService.clickEvent.subscribe((cnt) => (this.basketData = cnt));
  }

  ngOnInit(): void {}

  removeAll(): void {
    this.cartService.removeAll();
  }
}
