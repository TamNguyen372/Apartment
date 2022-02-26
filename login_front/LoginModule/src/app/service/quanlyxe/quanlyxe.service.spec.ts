import { TestBed } from '@angular/core/testing';

import { QuanlyxeService } from './quanlyxe.service';

describe('QuanlyxeService', () => {
  let service: QuanlyxeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuanlyxeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
