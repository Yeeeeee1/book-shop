import { createReducer, on, Action } from '@ngrx/store';
import { IBook } from '../shared/models/BookModel';
import { AppState } from './app.state';
import { addBook, removeBook } from './books.actions';
import { retrievedBookList } from './books.actions';

export const initialState: ReadonlyArray<IBook> = [];

export const collectionReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => [...Book]),
  on(removeBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId)
  ),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
