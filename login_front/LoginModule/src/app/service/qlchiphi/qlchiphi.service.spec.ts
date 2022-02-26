import { TestBed } from '@angular/core/testing';

import { QlchiphiService } from './qlchiphi.service';

describe('QlchiphiService', () => {
  let service: QlchiphiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QlchiphiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
