import { createSelector } from '@ngrx/store';
import { IBook } from '../shared/models/BookModel';

export const selectBooks = createSelector(
  (state: any) => state.collection,
  (books: Array<IBook>) => books
);
