import { TestBed } from '@angular/core/testing';

import { PtthanhtoanService } from './ptthanhtoan.service';

describe('PtthanhtoanService', () => {
  let service: PtthanhtoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PtthanhtoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
