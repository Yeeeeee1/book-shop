import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { IBook } from '../shared/models/BookModel';

export const selectBooks = createSelector(
  (state: any) => state.books,
  (books: Array<IBook>) => books
);

/*export const selectCollectionState = createFeatureSelector<
  AppState,
  ReadonlyArray<string>
>("collection");
 
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Array<IBook>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === Number(id)));
  }
);*/
