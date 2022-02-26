import { TestBed } from '@angular/core/testing';

import { PhiquanlyService } from './phiquanly.service';

describe('PhiquanlyService', () => {
  let service: PhiquanlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhiquanlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
