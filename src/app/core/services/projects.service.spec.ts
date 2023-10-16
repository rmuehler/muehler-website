import { TestBed } from '@angular/core/testing';
import { Project } from '../models/project';
import { ProjectsService } from './projects.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectsServiceAbstract } from './projects.service.abstract';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpClient : HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectsServiceAbstract]
    });
    service = TestBed.inject(ProjectsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProjects should return an Projects array', () => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getProjects().subscribe((data) => {
      expect(data).toBeInstanceOf(Array<Project>);
    });
  });
  });
