import { TestBed } from '@angular/core/testing';

import { JsConcurrencyExerciseService } from './js-concurrency-exercise.service';

describe('JsConcurrencyExerciseService', () => {
  let service: JsConcurrencyExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsConcurrencyExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
