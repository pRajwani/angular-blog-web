import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, from } from 'rxjs';
import { baseUrl } from '../shared/baseUrl';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgServiceService} from './process-httpmsg-service.service'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient,private processHTTPMsgService:ProcessHTTPMsgServiceService) { }

  onSubmit(SubmitData):Observable<any>{
    return this.http.post(baseUrl+'users/register',SubmitData)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
