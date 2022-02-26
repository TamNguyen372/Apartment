import { TestBed } from '@angular/core/testing';

import { GetalltaikhoanService } from './getalltaikhoan.service';

describe('GetalltaikhoanService', () => {
  let service: GetalltaikhoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetalltaikhoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
