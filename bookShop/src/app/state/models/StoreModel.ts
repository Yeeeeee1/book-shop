import { IBook } from 'src/app/shared/models/BookModel';
import { IBookId } from './BookIdModel';

export interface IStore {
  collection: IBook[];
  router: IBookId[];
}
