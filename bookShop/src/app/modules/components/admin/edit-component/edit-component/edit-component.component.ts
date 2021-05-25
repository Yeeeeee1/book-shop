import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Category, IBook } from 'src/app/shared/models/BookModel';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss'],
})
export class EditComponentComponent implements OnInit, OnDestroy {
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

  id = 0;

  paramSub: Subscription | null = new Subscription();

  dataSub: Subscription | null = new Subscription();

  updSub: Subscription | null = new Subscription();

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe(
      (data) => (this.id = Number(data.get('productID')))
    );
    this.dataSub = this.booksService
      .getBooks()
      .subscribe((data) => (this.book = data[this.id]));
  }

  ngOnDestroy(): void {
    if (this.dataSub) {
      this.dataSub.unsubscribe();
      this.dataSub = null;
    }
    if (this.paramSub) {
      this.paramSub.unsubscribe();
      this.paramSub = null;
    }
    if (this.updSub) {
      this.updSub.unsubscribe();
      this.updSub = null;
    }
  }

  save(): void {
    this.updSub = this.booksService
      .updateProduct(this.id, this.book)
      .subscribe();
    alert('Изменения приняты!');
    this.router.navigate([``]);
  }
}
