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

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
})
export class BookComponentComponent implements OnInit {
  bookData: Observable<IBook[]>;

  @Output() buyEvent = new EventEmitter<IBook>();
  constructor(private booksService: BooksService) {
    this.bookData = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  onBuy(book: IBook): void {
    this.buyEvent.emit(book);
    book.isAvailable = false;
  }
}
