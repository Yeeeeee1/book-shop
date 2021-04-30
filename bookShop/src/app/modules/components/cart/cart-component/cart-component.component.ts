import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
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
  booksData: IBook[] = [];
  flag = false;
  selectedOption: keyof IBook = 'price';

  paramSub: Subscription | null = new Subscription();
  booksDataSub: Subscription | null = new Subscription();

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.basketData = this.cartService.getBasketData();
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.totalSum = this.cartService.getTotalSum();
    this.booksDataSub = this.booksService
      .getBooks()
      .subscribe((data) => (this.booksData = data));

    this.paramSub = this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id !== null) {
        this.basketData.push(this.booksService.products[Number(id)]);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.booksDataSub) {
      this.booksDataSub.unsubscribe();
      this.booksDataSub = null;
    }
    if (this.paramSub) {
      this.paramSub.unsubscribe();
      this.paramSub = null;
    }
  }

  sort(): void {
    this.flag = !this.flag;
  }

  removeAll(): void {
    for (const book of this.basketData) {
      this.booksData[book.id].isAvailable = true;
    }
    this.cartService.removeAll();
  }

  removeBook(id: number): void {
    this.booksData[id].isAvailable = true;
    this.cartService.removeBook(id);
  }
}
