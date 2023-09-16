import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsConcurrencyExerciseComponent } from '@sita/js-concurrency-exercise';
import { TheLicensePlateProblemComponent } from '@sita/the-license-plate-problem';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { TheMonotonicallyIncreasingSeriesComponent } from '@sita/the-monotonically-increasing-series';

@Component({
  standalone: true,
  imports: [
    WelcomeComponent,
    RouterModule,
    JsConcurrencyExerciseComponent,
    TheLicensePlateProblemComponent,
    TheMonotonicallyIncreasingSeriesComponent
  ],
  selector: 'exercise-sita-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercises';
}
