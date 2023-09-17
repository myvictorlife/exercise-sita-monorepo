// license-plate.actions.ts
import { createAction, props } from '@ngrx/store';

export const calculateLicensePlate = createAction(
  '[License Plate] Calculate',
  props<{ index: number }>()
);

export const calculateLicensePlateSuccess = createAction(
  '[License Plate] Calculate Success',
  props<{  index: number, licensePlate: string }>()
);
