import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { JsConcurrencyExerciseComponent } from './js-concurrency-exercise.component';

describe('JsConcurrencyExerciseComponent', () => {
  let spectator: Spectator<JsConcurrencyExerciseComponent>;
  const createComponent = createComponentFactory({
    component: JsConcurrencyExerciseComponent,
    detectChanges: false,
    imports: [
      StoreModule.forRoot({}),
      EffectsModule.forRoot([])
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
