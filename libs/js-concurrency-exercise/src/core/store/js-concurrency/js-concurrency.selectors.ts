import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromJsConcurrency from "./js-concurrency.reducer";

export const selectJsConcurrencyState = createFeatureSelector<fromJsConcurrency.State>('images');
  
  export const selectLoading = createSelector(
    selectJsConcurrencyState,
    (state) => state?.loading ?? false
  );
  
  export const selectAllImages = createSelector(
    selectJsConcurrencyState,
    fromJsConcurrency.selectAll
  );