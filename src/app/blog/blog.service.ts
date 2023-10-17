import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post';
import { Observable } from 'rxjs';
import { BlogServiceAbstract } from './blog.service.abstract';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BlogServiceAbstract{
  override getLinks(featured: boolean) : Observable<Post[]>{
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  constructor(private httpClient : HttpClient) {
    super();
  }
}
