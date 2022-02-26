import { TestBed } from '@angular/core/testing';

import { QlcanhoService } from './qlcanho.service';

describe('QlcanhoService', () => {
  let service: QlcanhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QlcanhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
