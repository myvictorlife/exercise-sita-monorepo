import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';


import * as fromJsConcurrency from '@sita/js-concurrency-exercise';
import * as fromLicensePlate from '@sita/license-plate-exercise';
import * as fromMonotonicallyIncreasingSeries from '@sita/monotonically-increasing-series-exercise';

export interface State {
  images: fromJsConcurrency.State;
  licensePlate: fromLicensePlate.LicensePlateState;
  indexList: fromMonotonicallyIncreasingSeries.MonotonicallyIncreasingState;
}

export const reducers: ActionReducerMap<State> = {
  images: fromJsConcurrency.reducer,
  licensePlate: fromLicensePlate.licensePlateReducer,
  indexList: fromMonotonicallyIncreasingSeries.monotonicallyReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
