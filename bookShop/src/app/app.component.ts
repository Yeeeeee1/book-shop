import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { IBook, Category } from './models/BookModel';
import { BooksService } from './services/books.service';

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
    this.bookService.addBook(book);
  }

  constructor(private bookService: BooksService) {
    this.bookService.onClick.subscribe(cnt => this.basketData = cnt);
  }

  ngOnInit(): void {
    this.bookData = [
    {
      name: 'The Bible',
      description: 'A collection of texts that are sacred in Judaism and Christianity and that constitute the Holy Scriptures in these religions. In Judaism, the Holy Scripture is the Tanakh, also called the Hebrew Bible; in Christianity - the Old Testament, consisting of the books of the Tanakh and additional sacred books, and the New Testament.',
      price: 2.99,
      category: Category.sacredText,
      createDate: 0,
      isAvailable: true,
      count: 1,
      id: 0,
    },
    {
      name: 'It',
      description: 'A horror novel by American writer Stephen King, first published in 1986 by Viking Press. The work touches on important topics for King: the power of memory, the strength of the united group, the impact of childhood trauma on adulthood. ',
      price: 3.00,
      category: Category.fiction,
      createDate: 5,
      isAvailable: false,
      count: 1,
      id: 1,
    },
    {
      name: 'War and peace',
      description: 'An epic novel by Leo Nikolaevich Tolstoy, describing Russian society in the era of wars against Napoleon in 1805-1812. The epilogue of the novel brings the story to 1820.',
      price: 2.99,
      category: Category.nonFiction,
      createDate: 0,
      isAvailable: true,
      count: 1,
      id: 2,
    },
  ];
  }
}
