import { Injectable } from '@angular/core';
import {ProcessHTTPMsgServiceService } from '../services/process-httpmsg-service.service'
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/baseUrl';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  
  constructor(private http: HttpClient, private processHTTPMsgService:ProcessHTTPMsgServiceService ) { }
  
  postlike(postId): Observable<any> {
    return this.http.post(baseUrl+'post/'+postId+'/like', postId)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

}
