// license-plate.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MonotonicallyIncreasingSeriesService {

  target = 0;

  F(index: number): number {
    return index ** 2;
  }

  findClosestIndex(target: number): Observable<number> {
    let left = 0;
    let right = 100;
    let closestIndex = -1;
    let closestDifference = Infinity;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const value = this.F(middle);

      if (Math.abs(value - target) < closestDifference) {
        closestDifference = Math.abs(value - target);
        closestIndex = middle;
      }

      if (value < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return of(closestIndex);
  }

}
