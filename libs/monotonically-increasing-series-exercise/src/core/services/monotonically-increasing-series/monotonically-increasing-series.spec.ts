
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { MonotonicallyIncreasingSeriesService } from './monotonically-increasing-series';

import { cold } from 'jasmine-marbles';

describe('MonotonicallyIncreasingSeriesService', () => {

  let spectator: SpectatorService<MonotonicallyIncreasingSeriesService>;

  const createService = createServiceFactory({
    service: MonotonicallyIncreasingSeriesService,
    imports: [],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should return F(23) is 5', () => {
    const expected = cold('(a|)', { a: 5 });
    expect(spectator.service.findClosestIndex(23)).toBeObservable(expected);
  });

  it('should return F(1000) is 31', () => {
    const expected = cold('(a|)', { a: 31 });
    expect(spectator.service.findClosestIndex(1000)).toBeObservable(expected);
  });

  it('should return F(900) is 30', () => {
    const expected = cold('(a|)', { a: 30 });
    expect(spectator.service.findClosestIndex(900)).toBeObservable(expected);
  });
  it('should return F(2000) is 31', () => {
    const expected = cold('(a|)', { a: 44 });
    expect(spectator.service.findClosestIndex(2000)).toBeObservable(expected);
  });

});

