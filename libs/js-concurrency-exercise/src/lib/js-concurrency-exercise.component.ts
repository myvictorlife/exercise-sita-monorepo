import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllImages, fetchImages, resetImagesStore } from '@sita/storage';
// import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'lib-js-concurrency-exercise',
  standalone: true,
  imports: [
    CommonModule,
    // MatCardModule
  ],
  templateUrl: './js-concurrency-exercise.component.html',
  styleUrls: ['./js-concurrency-exercise.component.scss']
})
export class JsConcurrencyExerciseComponent {

  images = this.store.selectSignal(selectAllImages);

  MAX_CONCURRENCY = signal(3);

  private urls = ['1', '', '2', '3', '4', '5', '6', '7', '8', '9'];

  constructor(private store: Store) {}

  loadImages() {
    this.store.dispatch(resetImagesStore());
    this.store.dispatch(fetchImages({
      urls: this.urls, maxConcurrency: 3
    }));
  }

}
