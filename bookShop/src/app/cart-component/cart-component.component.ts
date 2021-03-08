import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { IBook } from '../models/BookModel';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
})
export class CartComponentComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
