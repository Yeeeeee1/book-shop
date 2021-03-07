import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook, Category } from '../models/BookModel';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponentComponent implements OnInit {

  @Input() bookData: IBook[] | undefined;

  @Output() buyEvent = new EventEmitter<IBook>();

  onBuy(book: IBook): void {
    this.buyEvent.emit(book);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
