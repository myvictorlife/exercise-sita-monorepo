import { JsConcurrencyEffects } from "./js-concurrency/js-concurrency.effects";
import { LicensePlateEffects } from "./license-plate/license-plate.effects";
import { MonotonicallyEffects } from "./monotonically-increasing-series/monotonically-increasing-series.effects";

export const coreEffectsAtBootstrap = [
    JsConcurrencyEffects,
    LicensePlateEffects,
    MonotonicallyEffects
];
