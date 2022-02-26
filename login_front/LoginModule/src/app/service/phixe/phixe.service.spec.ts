import { TestBed } from '@angular/core/testing';

import { PhixeService } from './phixe.service';

describe('PhixeService', () => {
  let service: PhixeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhixeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
