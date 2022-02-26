import { TestBed } from '@angular/core/testing';

import { QuangcaoService } from './quangcao.service';

describe('QuangcaoService', () => {
  let service: QuangcaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuangcaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
