import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { IBook } from 'src/app/shared/models/BookModel';

import { Store } from '@ngrx/store';

import {
  retrievedBookList,
  removeBook,
} from '../../../../../state/books.actions';
import { selectBooks } from 'src/app/state/books.selector';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss'],
})
export class ProductsComponentComponent implements OnInit, OnDestroy {
  bookData$: Observable<IBook[]> = this.store.select(selectBooks);

  booksSub: Subscription | null = new Subscription();

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit(): void {
    this.booksSub = this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

  ngOnDestroy(): void {
    if (this.booksSub) {
      this.booksSub.unsubscribe();
      this.booksSub = null;
    }
  }

  removeBook(bookId: number): void {
    this.store.dispatch(removeBook({ bookId }));
  }
}
