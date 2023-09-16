import { TestBed } from '@angular/core/testing';

import { TheMonotonicallyIncreasingSeriesService } from './the-monotonically-increasing-series.service';

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
