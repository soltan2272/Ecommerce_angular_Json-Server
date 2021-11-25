import { TestBed } from '@angular/core/testing';

import { SceduledAdsService } from './sceduled-ads.service';

describe('SceduledAdsService', () => {
  let service: SceduledAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SceduledAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
