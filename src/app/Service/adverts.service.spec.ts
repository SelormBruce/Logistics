import { TestBed } from '@angular/core/testing';

import { AdvertsService } from './adverts.service';

describe('AdvertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertsService = TestBed.get(AdvertsService);
    expect(service).toBeTruthy();
  });
});
