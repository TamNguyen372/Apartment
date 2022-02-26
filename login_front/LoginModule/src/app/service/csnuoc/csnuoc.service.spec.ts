import { TestBed } from '@angular/core/testing';

import { CsnuocService } from './csnuoc.service';

describe('CsnuocService', () => {
  let service: CsnuocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsnuocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
