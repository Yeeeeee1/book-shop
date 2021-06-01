import { IBook } from '../shared/models/BookModel';

export interface AppState {
  books: ReadonlyArray<IBook>;
}
