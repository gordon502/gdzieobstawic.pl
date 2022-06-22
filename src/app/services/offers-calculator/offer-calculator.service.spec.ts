import { TestBed } from '@angular/core/testing';

import { OfferCalculatorService } from './offer-calculator.service';

describe('StakesCalculatorService', () => {
  let service: OfferCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
