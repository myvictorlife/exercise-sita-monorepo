import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { StoreModule } from '@ngrx/store';
import { JsConcurrencyExerciseService } from './js-concurrency-exercise.service';
import { provideMockStore } from '@ngrx/store/testing';
import { EffectsModule } from '@ngrx/effects';

describe('JsConcurrencyExerciseService', () => {


  let spectator: SpectatorService<JsConcurrencyExerciseService>;

  const initialState = {};

  const createService = createServiceFactory({
    service: JsConcurrencyExerciseService,
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
