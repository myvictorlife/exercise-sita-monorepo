// license-plate.actions.ts
import { createAction, props } from '@ngrx/store';

export const findClosestIndex = createAction(
  '[MONOTONICALLY] Find Closest Index ',
  props<{ target: number }>()
);

export const findClosestIndexSuccess = createAction(
  '[MONOTONICALLY] Find Closest Index Success',
  props<{  target: number, closestIndex: number }>()
);
