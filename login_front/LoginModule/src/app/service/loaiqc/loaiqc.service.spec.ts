import { TestBed } from '@angular/core/testing';

import { LoaiqcService } from './loaiqc.service';

describe('LoaiqcService', () => {
  let service: LoaiqcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaiqcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
