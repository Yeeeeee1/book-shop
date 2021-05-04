import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { IBook } from 'src/app/shared/models/BookModel';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss'],
})
export class ProductsComponentComponent implements OnDestroy {
  bookData$: Observable<IBook[]> = this.booksService.getBooks();

  removeSub: Subscription | null = new Subscription();

  constructor(private booksService: BooksService) {}

  removeBook(id: number): void {
    this.removeSub = this.booksService.removeProduct(id).subscribe();
  }

  ngOnDestroy(): void {
    if (this.removeSub) {
      this.removeSub.unsubscribe();
      this.removeSub = null;
    }
  }
}
