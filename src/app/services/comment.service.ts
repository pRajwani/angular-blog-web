import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { baseUrl } from '../shared/baseUrl';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgServiceService } from './process-httpmsg-service.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgServiceService) { }
  getComment(postId):Observable<any> {
    return this.http.get(baseUrl+'post/'+postId+'/comment')
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  postComment(postId,comment): Observable<any> {
    return this.http.post(baseUrl+'post/'+postId+'/comment',comment)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
