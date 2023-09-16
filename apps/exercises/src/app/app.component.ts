import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsConcurrencyExerciseComponent } from '@sita/js-concurrency-exercise';
import { TheLicensePlateProblemComponent } from '@sita/the-license-plate-problem';
import { WelcomeComponent } from '../pages/welcome/welcome.component';

@Component({
  standalone: true,
  imports: [
    WelcomeComponent,
    RouterModule,
    JsConcurrencyExerciseComponent,
    TheLicensePlateProblemComponent
  ],
  selector: 'exercise-sita-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercises';
}
