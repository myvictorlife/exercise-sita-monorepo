import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { JsConcurrencyExerciseComponent } from '@sita/js-concurrency-exercise';
import { TheLicensePlateProblemComponent } from '@sita/license-plate-exercise';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { MonotonicallyIncreasingSeriesExerciseComponent } from '@sita/monotonically-increasing-series-exercise';
import { EffectsModule } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const initialState = {
    images: {
      ids: [],
      entities: [],
    },
    licensePlate: {
      ids: [],
      entities: [],
    },
    indexList: {
      ids: [],
      entities: [],
    },
  };
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [
      RouterModule.forRoot([]),
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      JsConcurrencyExerciseComponent,
      TheLicensePlateProblemComponent,
      WelcomeComponent,
      MonotonicallyIncreasingSeriesExerciseComponent
    ],
    providers: [provideMockStore({initialState})],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'exercises'`, () => {
    const app = spectator.component;
    expect(app.title).toEqual('exercises');
  });


});
