import { TestBed } from '@angular/core/testing';

import { QlhoadonService } from './qlhoadon.service';

describe('QlhoadonService', () => {
  let service: QlhoadonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QlhoadonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
