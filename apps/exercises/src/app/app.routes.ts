import { Route } from '@angular/router';
import { JsConcurrencyExercisePage } from '../pages/exercises-page/js-concurrency-exercise/js-concurrency-exercise.page';

import { WelcomeComponent } from '../pages/welcome/welcome.component';

export const appRoutes: Route[] = [
    // {
    //     path: '',
    //     component: WelcomeComponent
    // },
    {
        path: 'js-concurrency-exercise',
        component: JsConcurrencyExercisePage
    }
];
