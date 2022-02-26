import { TestBed } from '@angular/core/testing';

import { ChungcuService } from './chungcu.service';

describe('ChungcuService', () => {
  let service: ChungcuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChungcuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
