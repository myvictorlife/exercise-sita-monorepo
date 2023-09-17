// license-plate.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MonotonicallyIncreasingSeriesService {

    target: number = 0;

    F(index: number): number {
        return index ** 2;
    }

    findClosestIndex(target: number): Observable<number> {
      let left: number = 0;
      let right: number = 100;
      let closestIndex: number = -1;
      let closestDifference: number = Infinity;
  
      while (left <= right) {
        let middle: number = Math.floor((left + right) / 2);
        let value: number = this.F(middle);
  
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
