import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLandingComponent } from './blog-landing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogLandingComponent', () => {
  let component: BlogLandingComponent;
  let fixture: ComponentFixture<BlogLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [BlogLandingComponent]
    });
    fixture = TestBed.createComponent(BlogLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
