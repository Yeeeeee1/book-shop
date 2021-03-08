import { Component, Input, OnInit } from '@angular/core';
import { IBook, Category } from 'src/app/models/BookModel';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-cart-item-component',
  templateUrl: './cart-item-component.component.html',
  styleUrls: ['./cart-item-component.component.scss']
})
export class CartItemComponentComponent implements OnInit {

  removeBook(id: number): void {
    this.booksService.removeBook(id);
    console.log(this.basketData);
  }

  basketData: IBook[] = [];
  
  constructor(private booksService: BooksService) {
    this.booksService.onClick.subscribe(cnt => this.basketData = cnt);
   }

  ngOnInit(): void {
  }

}
