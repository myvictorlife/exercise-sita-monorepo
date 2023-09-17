import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LicensePlateService } from '../../services/license-plate/license-plate.service';

import * as licensePlateActions from './license-plate.actions';

@Injectable()
export class LicensePlateEffects {
  
  calculateLicensePlate$ = createEffect(() =>
    { return this.actions$.pipe(
      ofType(licensePlateActions.calculateLicensePlate),
      mergeMap(({index}) =>
        this.licensePlateService.getLicensePlate(index).pipe(
          map(licensePlate => licensePlateActions.calculateLicensePlateSuccess({ index, licensePlate })),
          catchError(() => of({ type: '[License Plate] Calculate Error' }))
        )
      )
    ) }
  );

  constructor(
    private actions$: Actions,
    private licensePlateService: LicensePlateService
  ) {}
}
