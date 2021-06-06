import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { IBook, Category } from 'src/app/shared/models/BookModel';
import { retrievedBookList } from 'src/app/state/books.actions';
import {
  selectProductByUrl,
  selectRouterProductId,
  selectRouterState,
} from 'src/app/state/router/router.selector';
import { CartService } from '../../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss'],
})
export class CartItemComponentComponent implements OnInit, OnDestroy {
  @Input()
  flag!: boolean;
  @Input()
  term!: keyof IBook;
  basketData: any = this.store.select(selectProductByUrl);
  @Input() booksData: IBook[] = [];

  @Output() removeBookEvent = new EventEmitter<number>();

  paramSub: Subscription | null = new Subscription();
  bookSub: Subscription | null = new Subscription();

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }

  ngOnDestroy(): void {
    if (this.paramSub) {
      this.paramSub.unsubscribe();
      this.paramSub = null;
    }
    if (this.bookSub) {
      this.bookSub.unsubscribe();
      this.bookSub = null;
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
    this.removeBookEvent.emit(id);
  }
}
