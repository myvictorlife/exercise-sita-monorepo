import { TestBed } from '@angular/core/testing';

import { TheMonotonicallyIncreasingSeriesService } from './monotonically-increasing-series-exercise.service';

describe('TheMonotonicallyIncreasingSeriesService', () => {
  let service: TheMonotonicallyIncreasingSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMonotonicallyIncreasingSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
