import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { IBook, Category } from './models/BookModel';
import { BooksService } from './services/books.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'bookShop';
  @ViewChild('appTitle', { static: false })
  pRef!: ElementRef;

  basketData: IBook[] = [];

  bookData: IBook[] = [];

  ngAfterViewInit(): void {
    this.pRef.nativeElement.textContent = 'bookShop';
  }

  onBuy(book: IBook): void {
    this.cartService.addBook(book);
  }

  constructor(private cartService: CartService, private bookService: BooksService) {
    this.cartService.clickEvent.subscribe(cnt => this.basketData = cnt);
  }

  ngOnInit(): void {
    this.bookData = this.bookService.getBooks();
  }
}
