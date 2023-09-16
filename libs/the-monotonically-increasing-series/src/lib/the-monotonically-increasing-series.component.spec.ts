import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMonotonicallyIncreasingSeriesComponent } from './the-monotonically-increasing-series.component';

describe('TheMonotonicallyIncreasingSeriesComponent', () => {
  let component: TheMonotonicallyIncreasingSeriesComponent;
  let fixture: ComponentFixture<TheMonotonicallyIncreasingSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TheMonotonicallyIncreasingSeriesComponent]
    });
    fixture = TestBed.createComponent(TheMonotonicallyIncreasingSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
