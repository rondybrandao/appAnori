import { TestBed } from '@angular/core/testing';

import { FutebolService } from './futebol.service';

describe('FutebolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FutebolService = TestBed.get(FutebolService);
    expect(service).toBeTruthy();
  });
});
