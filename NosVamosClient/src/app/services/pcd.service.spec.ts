import { TestBed } from '@angular/core/testing';

import { PcdService } from './pcd.service';

describe('PcdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PcdService = TestBed.get(PcdService);
    expect(service).toBeTruthy();
  });
});
