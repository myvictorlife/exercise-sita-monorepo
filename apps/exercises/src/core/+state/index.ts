import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';

import * as fromSettingsSocialSport from '@sita/storage';


export interface State {
  images: fromSettingsSocialSport.State;
  licensePlate: fromSettingsSocialSport.LicensePlateState;
  indexList: fromSettingsSocialSport.MonotonicallyIncreasingState;
}

export const reducers: ActionReducerMap<State> = {
  images: fromSettingsSocialSport.reducer,
  licensePlate: fromSettingsSocialSport.licensePlateReducer,
  indexList: fromSettingsSocialSport.monotonicallyReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
