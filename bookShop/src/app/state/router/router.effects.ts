import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, tap } from 'rxjs/operators';
import { RouterActions } from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  navigateToProductDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Router] GO TO PRODUCT DETAILS'),
        tap(({ id }) => this.router.navigate(['product', id]))
      ),
    { dispatch: false }
  );
}
