import { TestBed } from '@angular/core/testing';

import { BioService } from './bio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BioService', () => {
  let service: BioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
