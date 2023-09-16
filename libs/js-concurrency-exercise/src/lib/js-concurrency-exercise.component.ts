import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'lib-js-concurrency-exercise',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>JS Concurrency Exercise</h1>
    <!-- <button (click)="loadImages()">Load Images</button>
    <div *ngFor="let image of images$ | async">
      <img [src]="image.url" [alt]="image.description">
    </div> -->
  `,
  styles: [
  ]
})
export class JsConcurrencyExerciseComponent {

  // images$ = this.store.select(selectImages);
  // constructor(private store: Store) {}

  loadImages() {
    // this.store.dispatch(fetchImages({ urls: this.urls, maxConcurrency: 5 }));
  }

}
