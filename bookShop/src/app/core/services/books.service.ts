import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../../shared/models/BookModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`http://localhost:3000/books`);
  }

  addBook(book: IBook): Observable<IBook[]> {
    return this.httpClient.post<IBook[]>(`http://localhost:3000/books`, book);
  }

  updateProduct(id: number, newBook: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(
      `http://localhost:3000/books/${id}`,
      newBook
    );
  }

  removeProduct(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:3000/books/${id}`);
  }
}
