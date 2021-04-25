import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
export class BookComponentComponent implements OnInit {
  bookData$: Observable<IBook[]> = this.booksService.getBooks();

  @Output() buyEvent = new EventEmitter<IBook>();
  constructor(
    private booksService: BooksService,
    private localStorageService: LocalStorageService,
    private cartService: CartService
  ) {
    this.cartService.removeEvent.subscribe(
      (data) => (this.bookData$ = of(data))
    );
  }

  ngOnInit(): void {
    if (this.localStorageService.getItem('booksData')[0] !== undefined) {
      this.bookData$ = of(this.localStorageService.getItem('booksData'));
    }
  }

  onBuy(book: IBook): void {
    book.isAvailable = false;
    this.cartService.addBook(book);
  }
}
