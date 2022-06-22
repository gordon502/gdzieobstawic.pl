import { TestBed } from '@angular/core/testing';

import { FlashscoreApiService } from './flashscore-api.service';

describe('FlashscoreService', () => {
  let service: FlashscoreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashscoreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
