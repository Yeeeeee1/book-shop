import { RouterState } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBook } from 'src/app/shared/models/BookModel';
import { selectBooks } from '../books.selector';

import { RouterStateUrl } from './router.state';

export const selectRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const selectRouterProductId = createSelector(
  selectRouterState,
  (state: any) => {
    console.log(state.state.root.firstChild.params.id);
    return state.state.root.firstChild.params.id;
  }
);

export const selectProductByUrl = createSelector(
  selectBooks,
  selectRouterProductId,
  (products, id) => {
    console.log(products);
    return products[id];
  }
);
