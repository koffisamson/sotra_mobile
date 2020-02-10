import { TestBed } from '@angular/core/testing';

import { ArretsFilterService } from './arrets-filter.service';

describe('ArretsFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArretsFilterService = TestBed.get(ArretsFilterService);
    expect(service).toBeTruthy();
  });
});
