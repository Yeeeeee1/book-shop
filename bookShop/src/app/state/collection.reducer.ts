import { createReducer, on } from '@ngrx/store';
import { IBook } from '../shared/models/BookModel';
import { addBook, removeBook } from './books.actions';
import { retrievedBookList } from './books.actions';

export const initialState: ReadonlyArray<IBook> = [];

export const collectionReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => [...Book]),
  on(removeBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId)
  ),
  on(addBook, (state, Book) => [...state, Book])
);
