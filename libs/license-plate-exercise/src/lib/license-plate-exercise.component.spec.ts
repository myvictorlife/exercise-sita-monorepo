import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TheLicensePlateProblemComponent } from './license-plate-exercise.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('TheLicensePlateProblemComponent', () => {
  let spectator: Spectator<TheLicensePlateProblemComponent>;

  const initialState = {
    licensePlate: {
      ids: [],
      entities: [],
    }
  };

  const createComponent = createComponentFactory({
    component: TheLicensePlateProblemComponent,
    imports: [
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
    ],
    providers: [
      provideMockStore({ initialState }),
    ]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
