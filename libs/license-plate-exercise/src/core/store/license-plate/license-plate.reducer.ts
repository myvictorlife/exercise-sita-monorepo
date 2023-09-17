// license-plate.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { calculateLicensePlateSuccess, resetState } from './license-plate.actions';


// license-plate.model.ts
export interface LicensePlate {
  id: number;
  plateNumber: string;
}


export interface LicensePlateState extends EntityState<LicensePlate> {
  loading: boolean;
}

export const adapter = createEntityAdapter<LicensePlate>();

export const initialLicensePlateState: LicensePlateState = adapter.getInitialState({
  loading: false
});

export const licensePlateReducer = createReducer(
  initialLicensePlateState,
  on(calculateLicensePlateSuccess, (state, { index, licensePlate }) => {
    return adapter.addOne({ id: index, plateNumber: licensePlate }, state);
  }),
  on(resetState, (state) => {
    return adapter.removeAll(state );
  })
);
