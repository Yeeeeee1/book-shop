import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { IBook } from '../../../../shared/models/BookModel';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
})
export class BookComponentComponent {
  bookData$: Observable<IBook[]> = this.booksService.getBooks();

  @Output() buyEvent = new EventEmitter<IBook>();
  constructor(
    private booksService: BooksService,
    private cartService: CartService
  ) {}

  onBuy(book: IBook): void {
    book.isAvailable = false;
    this.cartService.addBook(book);
  }
}
