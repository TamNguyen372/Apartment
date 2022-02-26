import { TestBed } from '@angular/core/testing';

import { QlthongbaoService } from './qlthongbao.service';

describe('QlthongbaoService', () => {
  let service: QlthongbaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QlthongbaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
