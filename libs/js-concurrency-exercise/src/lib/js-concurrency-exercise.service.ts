import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchImages, resetImagesStore } from '../core/store/js-concurrency/js-concurrency.actions';
import { selectAllImages } from '../core/store/js-concurrency/js-concurrency.selectors';

@Injectable()
export class JsConcurrencyExerciseService {

  images = this.store.selectSignal(selectAllImages);

  constructor(private store: Store) { }

  loadImages(urls: string[], maxConcurrency: number) {
    this.store.dispatch(fetchImages({urls , maxConcurrency }));
  }

  resetState() {
    this.store.dispatch(resetImagesStore());
  }
}
