import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsConcurrencyExerciseComponent } from '@sita/js-concurrency-exercise';

@Component({
  selector: 'exercise-sita-monorepo-js-concurrency-exercise',
  standalone: true,
  imports: [
    CommonModule,
    JsConcurrencyExerciseComponent
  ],
  templateUrl: './js-concurrency-exercise.page.html',
  styleUrls: ['./js-concurrency-exercise.page.scss']
})
export class JsConcurrencyExercisePage {

  constructor() { }

}
