import { Component, OnInit } from '@angular/core';
import { IBook, Category } from '../models/BookModel';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss']
})
export class BookComponentComponent implements OnInit {

  getBook() {
    
  }

  arr: IBook = {
    name: 'The Bible',
    description: `A collection of texts that are sacred in Judaism and Christianity and 
    that constitute the Holy Scriptures in these religions. In Judaism, the Holy Scripture is the Tanakh, also 
    called the Hebrew Bible; in Christianity - the Old Testament, consisting of the books of the Tanakh and additional 
    sacred books, and the New Testament.`,
    price: 2.99,
    category: Category.sacredText,
    createDate: 0,
    isAvailable: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
