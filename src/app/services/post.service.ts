import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgServiceService } from './process-httpmsg-service.service'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgServiceService) { }
  getPost(postId): Observable<any>{
    return this.http.get("http://localhost:3000/post/" + postId)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  getPosts(): Observable<any> {
    return this.http.get("http://localhost:3000/post")
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
