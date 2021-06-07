import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BooksService } from '../core/services/books.service';

@Injectable()
export class BooksEffects {
  addBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Book List] Add Book'),
      mergeMap((res: any) => {
        console.log(res);
        return this.booksService.addBook(res).pipe(
          map((book) => ({
            type: '[Books API] Books Deleted Success',
            payload: book,
          })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  deleteBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Book Collection] Remove Book'),
      mergeMap((res: any) => {
        console.log(res);
        return this.booksService.removeProduct(res.bookId).pipe(
          map((book) => ({
            type: '[Books API] Books Deleted Success',
            payload: book,
          })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
