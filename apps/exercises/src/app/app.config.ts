import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from '../core/core.module';

import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { metaReducers, reducers } from '../core/store/index';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      StoreModule.forRoot(reducers, { metaReducers }),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([]),
      CoreModule
    ]),
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation()
    )
  ],
};
