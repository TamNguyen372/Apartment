import { TestBed } from '@angular/core/testing';

import { MucdoService } from './mucdo.service';

describe('MucdoService', () => {
  let service: MucdoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MucdoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
