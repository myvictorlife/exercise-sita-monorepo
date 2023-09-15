import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConcurrencyExerciseComponent } from './js-concurrency-exercise.component';

describe('JsConcurrencyExerciseComponent', () => {
  let component: JsConcurrencyExerciseComponent;
  let fixture: ComponentFixture<JsConcurrencyExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsConcurrencyExerciseComponent]
    });
    fixture = TestBed.createComponent(JsConcurrencyExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
