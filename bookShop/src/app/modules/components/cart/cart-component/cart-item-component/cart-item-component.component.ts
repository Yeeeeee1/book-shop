import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { IBook } from 'src/app/shared/models/BookModel';
import { retrievedBookList } from 'src/app/state/books.actions';
import { IStore } from 'src/app/state/models/StoreModel';
import { selectProductByUrl } from 'src/app/state/router/router.selector';
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
  @Input() basketData: IBook[] = [];
  @Input() booksData: IBook[] = [];

  @Output() removeBookEvent = new EventEmitter<number>();

  booksSub: Subscription | null = new Subscription();

  constructor(
    private cartService: CartService,
    private booksService: BooksService,
    private store: Store<IStore>
  ) {}

  ngOnInit(): void {
    this.booksSub = this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
    const product = this.store.select(selectProductByUrl);
  }

  ngOnDestroy(): void {
    if (this.booksSub) {
      this.booksSub.unsubscribe();
      this.booksSub = null;
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
