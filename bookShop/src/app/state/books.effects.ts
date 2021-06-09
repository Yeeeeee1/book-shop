import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BooksService } from '../core/services/books.service';
import { IBook } from '../shared/models/BookModel';
import { actionTypes } from './enums/typeEnum';
import { IBookId } from './models/BookIdModel';

@Injectable()
export class BooksEffects {
  addBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.addBook),
      mergeMap((res: IBook) =>
        this.booksService.addBook(res).pipe(
          map((book) => ({
            type: '[Books API] Books Deleted Success',
            payload: book,
          })),
          catchError((error) => {
            console.log('Error:', error);
            return EMPTY;
          })
        )
      )
    )
  );

  deleteBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.removeBook),
      mergeMap((res: IBookId) =>
        this.booksService.removeProduct(res.bookId).pipe(
          map((book) => ({
            type: '[Books API] Books Deleted Success',
            payload: book,
          })),
          catchError((error) => {
            console.log('Error:', error);
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
