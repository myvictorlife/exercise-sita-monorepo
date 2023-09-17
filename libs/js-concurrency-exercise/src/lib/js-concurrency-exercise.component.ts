import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { resetImagesStore } from '../core/store/js-concurrency/js-concurrency.actions';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { CoreModule } from '../core/core.module';
import { JsConcurrencyExerciseService } from './js-concurrency-exercise.service';

@Component({
  selector: 'lib-js-concurrency-exercise',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    NgFor,
    CoreModule,
  ],
  providers: [
    JsConcurrencyExerciseService
  ],
  templateUrl: './js-concurrency-exercise.component.html',
  styleUrls: ['./js-concurrency-exercise.component.scss']
})
export class JsConcurrencyExerciseComponent {

  form: FormGroup;

  images = this.service.images;

  MAX_CONCURRENCY = signal(3);

  private urls = ['1', '', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  constructor(private store: Store, private fb: FormBuilder,
    private service: JsConcurrencyExerciseService) {
    this.form = this.fb.group({
      maxConcurrency: ['', [Validators.required, Validators.min(1)]]
    });
  }

  loadImages() {
    if (this.form.valid) {
      const maxConcurrency = parseInt(this.form.get('maxConcurrency')?.value);
      this.service.resetState();
      this.service.loadImages(this.urls, maxConcurrency);
    }
  }

  resetJsConcurrencyState() {
    this.store.dispatch(resetImagesStore());
  }

}
