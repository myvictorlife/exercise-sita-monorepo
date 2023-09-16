import { JsConcurrencyEffects } from "./js-concurrency/js-concurrency.effects";
import { LicensePlateEffects } from "./license-plate/license-plate.effects";

export const coreEffectsAtBootstrap = [
    JsConcurrencyEffects,
    LicensePlateEffects
];
