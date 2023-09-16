import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConcurrencyExercisePage } from './js-concurrency-exercise.page';

describe('JsConcurrencyExercisePage', () => {
  let component: JsConcurrencyExercisePage;
  let fixture: ComponentFixture<JsConcurrencyExercisePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsConcurrencyExercisePage]
    });
    fixture = TestBed.createComponent(JsConcurrencyExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
