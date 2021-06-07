import { createAction, props } from '@ngrx/store';
import { IBook } from '../shared/models/BookModel';
import { actionTypes } from './enums/typeEnum';

export const addBook = createAction(actionTypes.addBook, props<IBook>());

export const removeBook = createAction(
  actionTypes.removeBook,
  props<{ bookId: number }>()
);

export const retrievedBookList = createAction(
  actionTypes.retrievedBookList,
  props<{ books: IBook[] }>()
);
