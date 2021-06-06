import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
export class ProductsComponentComponent {
  bookData$: Observable<IBook[]> = this.store.select(selectBooks);

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }

  removeBook(bookId: number): void {
    this.store.dispatch(removeBook({ bookId }));
  }
}
