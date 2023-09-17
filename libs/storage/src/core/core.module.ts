import { NgModule } from '@angular/core';
import { coreEffectsAtBootstrap } from './store/core.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ImageCrudService } from './services/image-crud/image-crud.service';

import { MonotonicallyIncreasingSeriesService } from './services/monotonically-increasing-series/monotonically-increasing-series';

@NgModule({
  declarations: [ ],
  imports: [
    HttpClientModule,
    EffectsModule.forFeature(coreEffectsAtBootstrap),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    ImageCrudService,
    MonotonicallyIncreasingSeriesService
  ],
  exports: []
})
export class CoreModule { }
