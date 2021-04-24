import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { IBook, Category } from '../../../../shared/models/BookModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
})
export class BookComponentComponent {
  bookData$: Observable<IBook[]>;

  @Output() buyEvent = new EventEmitter<IBook>();
  constructor(private booksService: BooksService, private router: Router) {
    this.bookData$ = this.booksService.getBooks();
  }

  showCard(id: number): void {
    this.router.navigate([`product/`, `${id}`]);
  }

  onBuy(book: IBook): void {
    this.buyEvent.emit(book);
    book.isAvailable = false;
  }
}
