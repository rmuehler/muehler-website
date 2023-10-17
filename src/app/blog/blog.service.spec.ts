import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogServiceAbstract } from './blog.service.abstract';

describe('BlogService', () => {
  let service: BlogServiceAbstract;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogServiceAbstract],
    });
    service = TestBed.inject(BlogServiceAbstract);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

