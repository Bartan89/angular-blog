import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { rawDataPost } from './types';


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



