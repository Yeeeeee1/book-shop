import { createReducer, on, Action } from '@ngrx/store';

import { retrievedBookList } from './books.actions';
import { IBook } from '../shared/models/BookModel';

export const initialState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => [...Book])
);