import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { IBook } from 'src/app/shared/models/BookModel';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss'],
})
export class ProductsComponentComponent implements OnInit {
  bookData$: Observable<IBook[]> = this.booksService.getBooks();

  constructor(
    private booksService: BooksService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    if (this.localStorageService.getItem('booksData')[0] !== undefined) {
      this.bookData$ = of(this.localStorageService.getItem('booksData'));
    }
  }
}
