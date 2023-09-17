// license-plate.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MonotonicallyIncreasingSeriesService } from '../../services/monotonically-increasing-series/monotonically-increasing-series';

import * as actions from './monotonically-increasing-series.actions';

@Injectable()
export class MonotonicallyEffects {
  
  findClosestIndex$ = createEffect(() =>
    { return this.actions$.pipe(
      ofType(actions.findClosestIndex),
      mergeMap(({target}) =>
        this.service.findClosestIndex(target).pipe(
          map(closestIndex => actions.findClosestIndexSuccess({ target, closestIndex })),
          catchError(() => of({ type: '[License Plate] Find Closest Index Error' }))
        )
      )
    ) }
  );

  constructor(
    private actions$: Actions,
    private service: MonotonicallyIncreasingSeriesService
  ) {}
}
