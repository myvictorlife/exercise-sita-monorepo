import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsConcurrencyExerciseComponent } from '@sita/js-concurrency-exercise';
import { TheLicensePlateProblemComponent } from '@sita/license-plate-exercise';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { MonotonicallyIncreasingSeriesExerciseComponent } from '@sita/monotonically-increasing-series-exercise';

@Component({
  standalone: true,
  imports: [
    WelcomeComponent,
    RouterModule,
    JsConcurrencyExerciseComponent,
    TheLicensePlateProblemComponent,
    MonotonicallyIncreasingSeriesExerciseComponent
  ],
  selector: 'exercise-sita-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercises';
}
