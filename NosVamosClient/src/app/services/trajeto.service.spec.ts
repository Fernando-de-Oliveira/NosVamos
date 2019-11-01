import { TestBed } from '@angular/core/testing';

import { TrajetoService } from './trajeto.service';

describe('TrajetoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrajetoService = TestBed.get(TrajetoService);
    expect(service).toBeTruthy();
  });
});
