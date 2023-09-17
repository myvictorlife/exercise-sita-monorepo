import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonotonicallyIncreasingSeriesExerciseComponent } from './monotonically-increasing-series-exercise.component';

describe('MonotonicallyIncreasingSeriesExerciseComponent', () => {
  let component: MonotonicallyIncreasingSeriesExerciseComponent;
  let fixture: ComponentFixture<MonotonicallyIncreasingSeriesExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MonotonicallyIncreasingSeriesExerciseComponent]
    });
    fixture = TestBed.createComponent(MonotonicallyIncreasingSeriesExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
