import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
export class CartItemComponentComponent {
  @Input()
  flag!: boolean;
  @Input()
  term!: keyof IBook;
  @Input() basketData: IBook[] = [];
  @Input() booksData: IBook[] = [];

  @Output() removeBookEvent = new EventEmitter<number>();

  constructor(private cartService: CartService) {}

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
    this.removeBookEvent.emit(id);
  }
}
