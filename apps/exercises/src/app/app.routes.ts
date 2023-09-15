import { Route } from '@angular/router';
import { JsConcurrencyExerciseComponent } from '../pages/exercises-page/js-concurrency-exercise/js-concurrency-exercise.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';

export const appRoutes: Route[] = [
    // {
    //     path: '',
    //     component: WelcomeComponent
    // },
    {
        path: 'js-concurrency-exercise',
        component: JsConcurrencyExerciseComponent
    }
];
