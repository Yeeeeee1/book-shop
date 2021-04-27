import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { IBook } from 'src/app/shared/models/BookModel';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  basketData: IBook[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.basketData = this.localStorageService.getItem('basketData');
  }

  sendData(): void {
    this.basketData = [];
    this.localStorageService.removeItem('basketData');
    this.cartService.removeAll();
    alert('Заказ выполнен!');
    this.router.navigate(['']);
  }
}
