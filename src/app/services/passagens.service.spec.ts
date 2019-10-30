import { TestBed } from '@angular/core/testing';

import { PassagensService } from './passagens.service';

describe('PassagensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassagensService = TestBed.get(PassagensService);
    expect(service).toBeTruthy();
  });
});
