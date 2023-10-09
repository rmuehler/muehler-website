import { TestBed } from '@angular/core/testing';

import { FunctionsService } from './functions.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FunctionsServiceAbstract } from './functions.service.abstract';

describe('FunctionsServiceService', () => {
  let service: FunctionsService;
  let httpClient : HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FunctionsServiceAbstract]
    });
    service = TestBed.inject(FunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getName should return a string', () => {
    expect(service.getName()).toBeTruthy;
    expect(service.getName()).toEqual(jasmine.any(String));
  })
});
