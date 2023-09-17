// license-plate.selectors.ts
import { createFeatureSelector } from '@ngrx/store';
import { LicensePlateState, adapter } from './license-plate.reducer';

export const selectLicensePlateState = createFeatureSelector<LicensePlateState>('licensePlate');

export const {
  selectAll: selectAllLicensePlates
} = adapter.getSelectors(selectLicensePlateState);
