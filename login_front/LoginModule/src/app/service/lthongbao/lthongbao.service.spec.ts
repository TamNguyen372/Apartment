import { TestBed } from '@angular/core/testing';

import { LthongbaoService } from './lthongbao.service';

describe('LthongbaoService', () => {
  let service: LthongbaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LthongbaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
