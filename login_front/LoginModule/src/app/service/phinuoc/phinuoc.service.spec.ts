import { TestBed } from '@angular/core/testing';

import { PhinuocService } from './phinuoc.service';

describe('PhinuocService', () => {
  let service: PhinuocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhinuocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
