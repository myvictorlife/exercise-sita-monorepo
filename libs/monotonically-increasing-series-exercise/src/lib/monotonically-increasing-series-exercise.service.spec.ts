
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { StoreModule } from '@ngrx/store';

import { provideMockStore } from '@ngrx/store/testing';
import { EffectsModule } from '@ngrx/effects';
import { MonotonicallyIncreasingSeriesService } from './monotonically-increasing-series-exercise.service';

describe('MonotonicallyIncreasingSeriesService', () => {


  let spectator: SpectatorService<MonotonicallyIncreasingSeriesService>;

  const initialState: any = {};

  const createService = createServiceFactory({
    service: MonotonicallyIncreasingSeriesService,
    imports: [
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
    ],
    providers: [
      provideMockStore({ initialState }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
