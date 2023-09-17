import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLicensePlateProblemComponent } from './license-plate-exercise.component';

describe('TheLicensePlateProblemComponent', () => {
  let component: TheLicensePlateProblemComponent;
  let fixture: ComponentFixture<TheLicensePlateProblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TheLicensePlateProblemComponent]
    });
    fixture = TestBed.createComponent(TheLicensePlateProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
