import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MonotonicallyIncreasingSeriesExerciseComponent } from './monotonically-increasing-series-exercise.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common'; // Importe o CommonModule em vez de NgFor
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('MonotonicallyIncreasingSeriesExerciseComponent', () => {
  let spectator: Spectator<MonotonicallyIncreasingSeriesExerciseComponent>;

  const initialState = {
    indexList: {
      ids: [],
      entities: [],
    },
  };

  const createComponent = createComponentFactory({
    component: MonotonicallyIncreasingSeriesExerciseComponent,
    imports: [
      MatCardModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatGridListModule,
      CommonModule,
      CoreModule,
      StoreModule.forRoot({}),
      EffectsModule.forRoot([])
    ],
    providers: [provideMockStore({initialState})],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
