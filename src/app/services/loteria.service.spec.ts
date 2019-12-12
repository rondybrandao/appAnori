import { TestBed } from '@angular/core/testing';

import { LoteriaService } from './loteria.service';

describe('LoteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoteriaService = TestBed.get(LoteriaService);
    expect(service).toBeTruthy();
  });
});
