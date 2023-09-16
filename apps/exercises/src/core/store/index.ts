import { ActionReducerMap } from '@ngrx/store';

import { MetaReducer } from '@ngrx/store';

import * as fromSettingsSocialSport from './js-concurrency/js-concurrency.reducer';

export interface State {
  images: fromSettingsSocialSport.State;
}

export const reducers: ActionReducerMap<State> = {
  images: fromSettingsSocialSport.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
