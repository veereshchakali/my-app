import { TestBed } from '@angular/core/testing';

import { StusentService } from './stusent.service';

describe('StusentService', () => {
  let service: StusentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StusentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
