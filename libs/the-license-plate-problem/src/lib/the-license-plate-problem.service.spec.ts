import { TestBed } from '@angular/core/testing';

import { TheLicensePlateProblemService } from './the-license-plate-problem.service';

describe('TheLicensePlateProblemService', () => {
  let service: TheLicensePlateProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheLicensePlateProblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
