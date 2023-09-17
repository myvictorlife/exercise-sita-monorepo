import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { findClosestIndex } from '../core/store/monotonically-increasing-series/monotonically-increasing-series.actions';
import { selectIndexList } from '../core/store/monotonically-increasing-series/monotonically-increasing-series.selectors';
import { CoreModule } from '../core/core.module';

@Component({
  selector: 'lib-monotonically-increasing-series-exercise',
  standalone: true,
  templateUrl: './monotonically-increasing-series-exercise.component.html',
  imports: [
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    NgFor,
    CoreModule
  ],
  styleUrls: ['./monotonically-increasing-series-exercise.component.scss']
})
export class MonotonicallyIncreasingSeriesExerciseComponent {

  indexList = this.store.selectSignal(selectIndexList);

  form: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {
    this.form = this.fb.group({
      target: ['', [Validators.required, Validators.min(1)]]
    });
  }

  calculateClosestIndex() {
    if (this.form.valid) {
      const target = parseInt(this.form.get('target')?.value);
      this.store.dispatch(findClosestIndex({ target }));
    }
  }

  resetState() {} 
}
