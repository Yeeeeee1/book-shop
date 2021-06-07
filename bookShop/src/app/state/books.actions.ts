import { createAction, props } from '@ngrx/store';
import { IBook } from '../shared/models/BookModel';

export const addBook = createAction('[Book List] Add Book', props<IBook>());

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: number }>()
);

export const retrievedBookList = createAction(
  '[Books Page] Load Books',
  props<{ books: IBook[] }>()
);
