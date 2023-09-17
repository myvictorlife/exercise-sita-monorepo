import { Component, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';


import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { CoreModule } from '../core/core.module';
import { selectAllImages } from '../core/store/js-concurrency/js-concurrency.selectors';
import { fetchImages, resetImagesStore } from '../core/store/js-concurrency/js-concurrency.actions';

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
    CoreModule
  ],
  templateUrl: './js-concurrency-exercise.component.html',
  styleUrls: ['./js-concurrency-exercise.component.scss']
})
export class JsConcurrencyExerciseComponent {

  form: FormGroup;

  images = this.store.selectSignal(selectAllImages);

  MAX_CONCURRENCY = signal(3);

  private urls = ['1', '', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  constructor(private store: Store, private fb: FormBuilder) {
    this.form = this.fb.group({
      maxConcurrency: ['', [Validators.required, Validators.min(1)]]
    });
  }

  loadImages() {
    if (this.form.valid) {
      const maxConcurrency = parseInt(this.form.get('maxConcurrency')?.value);
      this.store.dispatch(resetImagesStore());
      this.store.dispatch(fetchImages({
        urls: this.urls, maxConcurrency
      }));
    }
  }

  resetJsConcurrencyState() {
    this.store.dispatch(resetImagesStore());
  }

}
