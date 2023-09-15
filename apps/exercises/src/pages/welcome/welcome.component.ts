import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsConcurrencyExerciseComponent } from '@sita/js-concurrency-exercise';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'exercise-sita-monorepo-nx-welcome',
  standalone: true,
  imports: [
    CommonModule,
    JsConcurrencyExerciseComponent,
    RouterModule
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomeComponent {

  constructor(private router: Router) { }

  redirectToJsConcurrencyExercisePage() {
    this.router.navigate(['/js-concurrency-exercise']);
  }

}
