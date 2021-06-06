import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { Category, IBook } from 'src/app/shared/models/BookModel';
import { addBook } from 'src/app/state/books.actions';

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

  booksSub: Subscription | null = new Subscription();

  constructor(
    private booksService: BooksService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.booksSub = this.booksService.getBooks().subscribe((Book) => {
      this.book.id = Book.length - 1;
    });
  }

  ngOnDestroy(): void {
    if (this.booksSub) {
      this.booksSub.unsubscribe();
      this.booksSub = null;
    }
  }

  save(): void {
    this.book.createDate = Date.now();
    this.store.dispatch(addBook(this.book));
    alert('Продукт добавлен!');
    this.router.navigate([``]);
  }
}
