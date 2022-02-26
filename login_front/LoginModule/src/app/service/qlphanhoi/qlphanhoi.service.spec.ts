import { TestBed } from '@angular/core/testing';

import { QlphanhoiService } from './qlphanhoi.service';

describe('QlphanhoiService', () => {
  let service: QlphanhoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QlphanhoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
