import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IBook } from '../models/BookModel';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
})
export class CartComponentComponent implements OnInit {

  totalQuantity = 0;

  totalSum = 0;

  removeAll(): void {
    this.cartService.removeAll();
  }

  constructor(private cartService: CartService) {
    this.cartService.clickQuantityEvent.subscribe(cnt => this.totalQuantity = cnt);
    this.cartService.clickSumEvent.subscribe(cnt => this.totalSum = cnt);
  }

  ngOnInit(): void {
  }

}
