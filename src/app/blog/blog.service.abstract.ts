import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post';
import { Observable } from 'rxjs';


export abstract class BlogServiceAbstract {
  getLinks(featured: boolean) : Observable<Post[]>{
    return new Observable<Post[]>(
      (observer) => {
        observer.next([
          {
            id: 1,
            title: "Post 1",
            body: "This is post 1",
            userId: 1,
            createdAt: new Date().getDate().toString()
          }]);
})}}
