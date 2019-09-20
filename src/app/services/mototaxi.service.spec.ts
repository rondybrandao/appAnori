import { TestBed } from '@angular/core/testing';

import { MototaxiService } from './mototaxi.service';

describe('MototaxiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MototaxiService = TestBed.get(MototaxiService);
    expect(service).toBeTruthy();
  });
});
