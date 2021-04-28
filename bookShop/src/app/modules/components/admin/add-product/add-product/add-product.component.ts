import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Category, IBook } from 'src/app/shared/models/BookModel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
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

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {}

  save(): void {
    this.book.createDate = Date.now();
    this.booksService
      .getBooks()
      .subscribe((data) => (this.book.id = data[data.length - 1].id + 1));
    this.booksService.addBook(this.book);
    alert('Продукт добавлен!');
  }
}
