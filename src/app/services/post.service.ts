import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgServiceService } from './process-httpmsg-service.service'
import { baseUrl, baseImageUrl } from '../shared/baseUrl';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgServiceService) { }
  
  getPost(postId): Observable<any>{
    return this.http.get("post/" + postId)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  getPosts(): Observable<any> {
    return this.http.get("post")
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  deletePost(post_id):Observable<any>{
    return this.http.delete('post/'+post_id)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  updatePost(post_id,data):Observable<any>{
    return this.http.put('post/'+post_id,data)
  }
  
}

