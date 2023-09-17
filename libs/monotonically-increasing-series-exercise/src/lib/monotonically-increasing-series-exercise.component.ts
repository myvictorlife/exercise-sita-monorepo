import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { MonotonicallyIncreasingSeriesService } from './monotonically-increasing-series-exercise.service';

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
  providers: [
    MonotonicallyIncreasingSeriesService
  ],
  styleUrls: ['./monotonically-increasing-series-exercise.component.scss']
})
export class MonotonicallyIncreasingSeriesExerciseComponent {

  indexList = this.service.indexList;

  form: FormGroup;

  constructor(private fb: FormBuilder, private service: MonotonicallyIncreasingSeriesService) {
    this.form = this.fb.group({
      target: ['', [Validators.required, Validators.min(1)]]
    });
  }

  calculateClosestIndex(): void {
    if (this.form.valid) {
      const target = parseInt(this.form.get('target')?.value);
      this.service.calculateClosestIndex(target);
    }
  }

  resetState(): void {
    this.service.resetState();
  }
}
