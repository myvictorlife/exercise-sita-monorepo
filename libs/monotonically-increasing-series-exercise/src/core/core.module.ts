import { NgModule } from '@angular/core';
import { coreEffectsAtBootstrap } from './store/core.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { StoreRouterConnectingModule } from '@ngrx/router-store';


import { MonotonicallyIncreasingSeriesService } from './services/monotonically-increasing-series/monotonically-increasing-series';

@NgModule({
  declarations: [ ],
  imports: [
    HttpClientModule,
    EffectsModule.forFeature(coreEffectsAtBootstrap),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    MonotonicallyIncreasingSeriesService
  ],
  exports: []
})
export class CoreModule { }
