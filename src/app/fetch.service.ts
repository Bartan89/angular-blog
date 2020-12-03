import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



interface rawDataPost {
  status: string
  feed: {
    title: string
    link: string
    author: string
    description: string
    image: string
  }
  items: Post[]
}

interface Post {
  author: string
  categories: string[]
  content: string
  description: string
  enclosure: {}
  guid: string
  link: string
  pubDate: string
  thumbnail: string
  title: string
}

@Injectable({
  providedIn: 'root',
})
export class FetchService {

  // getPosts!: Promise<any>


  constructor(private http: HttpClient) { }

  getPosts(): Observable<rawDataPost> {
    return this.http.get<rawDataPost>("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/codestar-blog")
  }
}



