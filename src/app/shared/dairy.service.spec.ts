import { TestBed } from '@angular/core/testing';

import { DairyService } from './dairy.service';

describe('DairyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DairyService = TestBed.get(DairyService);
    expect(service).toBeTruthy();
  });
});
