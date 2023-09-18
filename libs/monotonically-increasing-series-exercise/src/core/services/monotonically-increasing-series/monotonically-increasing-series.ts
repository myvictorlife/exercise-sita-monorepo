// license-plate.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MonotonicallyIncreasingSeriesService {

  target = 0;

  // Function to calculate the value at a given index in the sequence.
  // In this case, the value is the square of the index.
  F(index: number): number {
    return index ** 2;
  }

  // Function to find the index where the value of the sequence is closest to the target.
  // It returns this index as an observable.
  findClosestIndex(target: number): Observable<number> {
    // Initializing the left boundary to 0 and the right boundary to 100.
    let left = 0;
    let right = 100;

    // Initializing the closest index to -1 and the closest difference to infinity
    // to keep track of the closest found index and its difference from the target.
    let closestIndex = -1;
    let closestDifference = Infinity;

    // Loop to perform a binary search between the left and right boundaries.
    while (left < right) {
      // Calculating the middle index between the left and right boundaries.
      const middle = Math.floor((left + right) / 2);

      // Getting the value of the sequence at the middle index.
      const value = this.F(middle);

      // If the difference between the current value and the target is less than
      // the closest found difference, update the closest difference and index.
      if (Math.abs(value - target) < closestDifference) {
        closestDifference = Math.abs(value - target);
        closestIndex = middle;
      }

      // Adjust the boundaries for the next iteration: if the current value is less
      // than the target, move the left boundary; otherwise, move the right boundary.
      if (value < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    // Return the closest index found as an observable.
    return of(closestIndex);
  }
}
