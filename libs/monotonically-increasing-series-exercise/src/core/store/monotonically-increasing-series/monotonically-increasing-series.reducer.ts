// license-plate.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { findClosestIndexSuccess } from './monotonically-increasing-series.actions';


// license-plate.model.ts
export interface MonotonicallyIncreasing {
  id: number;
  target: number;
  closestIndex: number;
}


export interface MonotonicallyIncreasingState extends EntityState<MonotonicallyIncreasing> {
  loading: boolean;
}

export const monotonicallyAdapter = createEntityAdapter<MonotonicallyIncreasing>();

export const initialMonotonicallyIncreasingState: MonotonicallyIncreasingState = monotonicallyAdapter.getInitialState({
  loading: false
});

export const monotonicallyReducer = createReducer(
  initialMonotonicallyIncreasingState,
  on(findClosestIndexSuccess, (state, { target, closestIndex }) => {
    return monotonicallyAdapter.addOne({ id: target, target, closestIndex }, state);
  })
);
