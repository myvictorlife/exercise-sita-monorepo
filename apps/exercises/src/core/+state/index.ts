import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';

import * as fromSettingsSocialSport from '@sita/storage';
import * as fromLicensePlate from '@sita/license-plate-exercise';

export interface State {
  images: fromSettingsSocialSport.State;
  licensePlate: fromLicensePlate.LicensePlateState;
  indexList: fromSettingsSocialSport.MonotonicallyIncreasingState;
}

export const reducers: ActionReducerMap<State> = {
  images: fromSettingsSocialSport.reducer,
  licensePlate: fromLicensePlate.licensePlateReducer,
  indexList: fromSettingsSocialSport.monotonicallyReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
