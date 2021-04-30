import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, SubscriptionLike } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Category, IBook } from 'src/app/shared/models/BookModel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, OnDestroy {
  book: IBook = {
    name: '',
    description: '',
    price: 0,
    category: Category.fiction,
    createDate: 0,
    isAvailable: true,
    count: 1,
    id: 0,
  };

  dataSub: Subscription | null = new Subscription();

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.dataSub = this.booksService
      .getBooks()
      .subscribe((data) => (this.book.id = data[data.length - 1].id + 1));
  }

  ngOnDestroy(): void {
    if (this.dataSub) {
      this.dataSub.unsubscribe();
      this.dataSub = null;
    }
  }

  save(): void {
    this.book.createDate = Date.now();
    this.booksService.addBook(this.book);
    alert('Продукт добавлен!');
  }
}
