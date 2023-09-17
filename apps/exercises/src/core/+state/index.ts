import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';

import * as fromSettingsSocialSport from '@sita/storage';
import * as fromJsConcurrency from '@sita/js-concurrency-exercise';
import * as fromLicensePlate from '@sita/license-plate-exercise';

export interface State {
  images: fromJsConcurrency.State;
  licensePlate: fromLicensePlate.LicensePlateState;
  indexList: fromSettingsSocialSport.MonotonicallyIncreasingState;
}

export const reducers: ActionReducerMap<State> = {
  images: fromJsConcurrency.reducer,
  licensePlate: fromLicensePlate.licensePlateReducer,
  indexList: fromSettingsSocialSport.monotonicallyReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
