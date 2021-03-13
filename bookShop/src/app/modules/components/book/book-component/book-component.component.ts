import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook, Category } from '../../../../shared/models/BookModel';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
})
export class BookComponentComponent implements OnInit {

  @Input() bookData: IBook[] | undefined;

  @Output() buyEvent = new EventEmitter<IBook>();
  constructor() {}

  ngOnInit(): void {
  }

  onBuy(book: IBook): void {
    this.buyEvent.emit(book);
    book.isAvailable = false;
  }

}
