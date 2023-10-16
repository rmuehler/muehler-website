import { TestBed } from '@angular/core/testing';
import { FunctionsService } from './functions.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FunctionsServiceAbstract } from './functions.service.abstract';
import { of } from 'rxjs';

describe('FunctionsServiceService', () => {
  let service: FunctionsService;
  let httpClient : HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FunctionsServiceAbstract]
    });
    service = TestBed.inject(FunctionsService);
    httpClient = TestBed.inject(HttpClient);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getName should return a string', () => {
    spyOn(httpClient, 'get').and.returnValue(of('test string'));
    service.getName().subscribe((data) => {
      expect(data).toEqual(jasmine.any(String));
  })});
  });
