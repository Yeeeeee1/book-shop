import { NavigationExtras } from '@angular/router';
import { createAction, props } from '@ngrx/store';

export const RouterActions = {
  forward: createAction('[Router] FORWARD'),
  back: createAction('[Router] BACK'),
  go: createAction(
    '[Router] GO',
    props<{
      path: any[];
      queryParams?: object;
      extras?: NavigationExtras;
    }>()
  ),
  goToProductDetails: createAction(
    '[Router] GO TO PRODUCT DETAILS',
    props<{
      id: number;
    }>()
  ),
};
