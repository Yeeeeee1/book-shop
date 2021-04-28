import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/core/services/books.service';
import { Category, IBook } from 'src/app/shared/models/BookModel';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss'],
})
export class EditComponentComponent implements OnInit {
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

  id: number = 0;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => (this.id = Number(data.get('id'))));
    this.booksService
      .getBooks()
      .subscribe((data) => (this.book = data[this.id]));
  }

  save(): void {
    this.booksService.products[this.id] = this.book;
    alert('Изменения приняты!');
  }
}
