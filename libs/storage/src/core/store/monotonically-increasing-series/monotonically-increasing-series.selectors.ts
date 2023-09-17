// license-plate.selectors.ts
import { createFeatureSelector } from '@ngrx/store';
import { MonotonicallyIncreasingState, monotonicallyAdapter } from './monotonically-increasing-series.reducer';

export const selectState = createFeatureSelector<MonotonicallyIncreasingState>
  ('indexList');

export const {
  selectAll: selectIndexList,
} = monotonicallyAdapter.getSelectors(selectState);
