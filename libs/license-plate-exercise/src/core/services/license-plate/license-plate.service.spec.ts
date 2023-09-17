
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { LicensePlateService } from './license-plate.service';
import { cold } from 'jasmine-marbles';

describe('LicensePlateService', () => {

  let spectator: SpectatorService<LicensePlateService>;

  const createService = createServiceFactory({
    service: LicensePlateService,
    imports: [],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should return "000001" for index 1', () => {
    const expected = cold('(a|)', { a: '000001' });
    expect(spectator.service.getLicensePlate(1)).toBeObservable(expected);
  });

  it('should return "00000A" for index 1.000.000', () => {
    const expected = cold('(a|)', { a: '00000A' });
    expect(spectator.service.getLicensePlate(1000000)).toBeObservable(expected);
  });

  it('should return "00002A" for index 1.000.002', () => {
    const expected = cold('(a|)', { a: '00002A' });
    expect(spectator.service.getLicensePlate(1000002)).toBeObservable(expected);
  });

  it('should return "99999A" for index 1.099.999', () => {
    const expected = cold('(a|)', { a: '99999A' });
    expect(spectator.service.getLicensePlate(1099999)).toBeObservable(expected);
  });

  it('should return "00000B" for index 1.100.000', () => {
    const expected = cold('(a|)', { a: '00000B' });
    expect(spectator.service.getLicensePlate(1100000)).toBeObservable(expected);
  });

  it('should return "99999B" for index 1.199.999', () => {
    const expected = cold('(a|)', { a: '99999B' });
    expect(spectator.service.getLicensePlate(1199999)).toBeObservable(expected);
  });

  it('should return "00000C" for index 1.200.000', () => {
    const expected = cold('(a|)', { a: '00000C' });
    expect(spectator.service.getLicensePlate(1200000)).toBeObservable(expected);
  });

  it('should return "00000D" for index 1.300.000', () => {
    const expected = cold('(a|)', { a: '00000D' });
    expect(spectator.service.getLicensePlate(1300000)).toBeObservable(expected);
  });

  it('should return "99999J" for index 1.999.999', () => {
    const expected = cold('(a|)', { a: '99999J' });
    expect(spectator.service.getLicensePlate(1999999)).toBeObservable(expected);
  });

});

