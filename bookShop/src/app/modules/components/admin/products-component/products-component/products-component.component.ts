import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { IBook } from 'src/app/shared/models/BookModel';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss'],
})
export class ProductsComponentComponent {
  bookData$: Observable<IBook[]> = this.booksService.getBooks();

  constructor(private booksService: BooksService) {}
}
