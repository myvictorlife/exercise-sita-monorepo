import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { findClosestIndex } from '../core/store/monotonically-increasing-series/monotonically-increasing-series.actions';
import { selectIndexList } from '../core/store/monotonically-increasing-series/monotonically-increasing-series.selectors';

@Injectable()
export class MonotonicallyIncreasingSeriesService {

  indexList = this.store.selectSignal(selectIndexList);

  constructor(private store: Store) { }

  calculateClosestIndex(target: number): void {
    this.store.dispatch(findClosestIndex({ target }));
  }

  resetState(): void {
    // Put the logic here
  }

}
