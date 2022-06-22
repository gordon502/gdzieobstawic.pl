import { TestBed } from '@angular/core/testing';

import { FlashscoreService } from './flashscore.service';

describe('FlashscoreService', () => {
  let service: FlashscoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashscoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
