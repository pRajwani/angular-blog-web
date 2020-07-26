import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/baseUrl';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgServiceService } from "./process-httpmsg-service.service";
@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http:HttpClient,private processHTTPMsgService:ProcessHTTPMsgServiceService) { }

  createPost(postData):Observable<any>{
    return this.http.post(baseUrl+'post',postData)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));  }
}
