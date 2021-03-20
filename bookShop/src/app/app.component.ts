import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { IBook, Category } from './shared/models/BookModel';
import { BooksService } from './core/services/books.service';
import { CartService } from './core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'bookShop';
  @ViewChild('appTitle', { static: false })
  pRef!: ElementRef;

  basketData: IBook[] = [];

  constructor(private cartService: CartService) {
    this.cartService.clickEvent.subscribe((cnt) => (this.basketData = cnt));
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.pRef.nativeElement.textContent = 'bookShop';
  }

  onBuy(book: IBook): void {
    this.cartService.addBook(book);
  }
}
