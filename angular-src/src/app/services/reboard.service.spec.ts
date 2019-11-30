import { TestBed } from '@angular/core/testing';

import { ReboardService } from './reboard.service';

describe('ReboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReboardService = TestBed.get(ReboardService);
    expect(service).toBeTruthy();
  });
});
