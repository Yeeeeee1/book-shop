import { createSelector, Store } from '@ngrx/store';
import { EMPTY, EmptyError } from 'rxjs';
import { IBook } from '../shared/models/BookModel';
import { AppState } from './app.state';
import { IStore } from './models/StoreModel';

export const selectBooks = createSelector(
  (state: IStore) => state.collection,
  (books: IBook[]) => books
);
