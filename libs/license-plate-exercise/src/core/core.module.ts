import { NgModule } from '@angular/core';
import { coreEffectsAtBootstrap } from './store/core.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LicensePlateService } from './services/license-plate/license-plate.service';

@NgModule({
  declarations: [ ],
  imports: [
    HttpClientModule,
    EffectsModule.forFeature(coreEffectsAtBootstrap),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    LicensePlateService
  ],
  exports: []
})
export class CoreModule { }
