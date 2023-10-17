import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.css']
})
export class BlogLandingComponent {

   links$ = this.blogService.getLinks(false);

  respOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, titleClasses: 'display-3' },
    { viewClasses: 'd-flex d-md-none', displayInColumn: true, titleClasses: '' }
  ];

 constructor(private blogService: BlogService) { }
}
