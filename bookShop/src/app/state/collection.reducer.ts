import { createReducer, on, State } from '@ngrx/store';
import { IBook } from '../shared/models/BookModel';
import { AppState } from './app.state';
import { addBook, removeBook } from './books.actions';
import { retrievedBookList } from './books.actions';

export const initialState: AppState = { books: [] };

export const collectionReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => {
    return { books: [...books] };
  }),
  on(removeBook, (state, { bookId }) => {
    return {
      books: [...state.books.filter((book: IBook) => book.id !== bookId)],
    };
  }),
  on(addBook, (state, book) => {
    return { books: [...state.books, book] };
  })
);
