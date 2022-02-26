import { TestBed } from '@angular/core/testing';

import { LcanhoService } from './lcanho.service';

describe('LcanhoService', () => {
  let service: LcanhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcanhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
