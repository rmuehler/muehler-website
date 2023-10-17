import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: { snapshot: { params: { id: 1 } } }
      }],
      declarations: [ BlogComponent ]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
