import { IBook } from 'src/app/shared/models/BookModel';
import { AppState } from '../app.state';
import { IBookId } from './BookIdModel';

export interface IStore {
  collection: AppState;
  router: IBookId[];
}
