import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { IBook } from '../../../../shared/models/BookModel';
import { of } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
})
export class BookComponentComponent implements OnInit, OnDestroy {
  bookData$: Observable<IBook[]> = this.booksService.getBooks();

  removeSub: Subscription | null = new Subscription();

  @Output() buyEvent = new EventEmitter<IBook>();
  constructor(
    private booksService: BooksService,
    private localStorageService: LocalStorageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.removeSub = this.cartService.removeEvent.subscribe(
      (data) => (this.bookData$ = of(data))
    );
    if (this.localStorageService.getItem('booksData')[0] !== undefined) {
      this.bookData$ = of(this.localStorageService.getItem('booksData'));
    }
  }

  ngOnDestroy(): void {
    if (this.removeSub) {
      this.removeSub.unsubscribe();
      this.removeSub = null;
    }
  }

  onBuy(book: IBook): void {
    book.isAvailable = false;
    this.cartService.addBook(book);
  }
}
