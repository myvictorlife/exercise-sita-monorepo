import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../pages/welcome/welcome.component';

@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  selector: 'exercise-sita-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercises';
}
