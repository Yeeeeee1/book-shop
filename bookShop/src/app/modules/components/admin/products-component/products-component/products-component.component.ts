import { Component, OnChanges, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { IBook } from 'src/app/shared/models/BookModel';

import { Store, select } from '@ngrx/store';

import { selectBooks } from '../../../../../state/books.selector';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from '../../../../../state/books.actions';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss'],
})
export class ProductsComponentComponent implements OnDestroy {
  bookData$: Observable<IBook[]> = this.store.select(
    (store: any) => store.collection
  );

  removeSub: Subscription | null = new Subscription();

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
    this.bookData$.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    if (this.removeSub) {
      this.removeSub.unsubscribe();
      this.removeSub = null;
    }
  }

  removeBook(bookId: number): void {
    this.store.dispatch(removeBook({ bookId }));
  }
}
