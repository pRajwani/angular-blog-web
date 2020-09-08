import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import  {map, catchError} from 'rxjs/operators';
import { baseUrl } from '../shared/baseUrl';
import { ProcessHTTPMsgServiceService} from './process-httpmsg-service.service';


interface AuthResponse {
  status: string;
  success: string;
  token: string;
}

interface JWTResponse {
  status: string;
  success: string;
  user: any;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  tokenKey = 'JWT';
  isAuthenticated: Boolean = false;
  username: Subject<string> = new Subject<string>();
  authToken: string = undefined;
  localErr: any;

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgServiceService) { }

  checkJWTtoken() {
    this.http.get<JWTResponse>(baseUrl + 'users/checkJWTtoken')
    .subscribe(res => {
      console.log('JWT Token Valid: ', res);
      this.sendUsername(res.user.username);
    },
    err => {
      console.log('JWT Token invalid: ', err);
      this.destroyUserCredentials();
    });
  }

  sendUsername(name: string) {
    this.username.next(name);
  }

  clearUsername() {
    this.username.next(undefined);
  }

  loadUserCredentials() {
    const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
    console.log('loadUserCredentials ', credentials);
    if (credentials && credentials.username !== undefined) {
      this.useCredentials(credentials);
      if (this.authToken) {
       this.checkJWTtoken();
      }
    }
  }

  storeUserCredentials(credentials: any) {
    console.log('storeUserCredentials ', credentials);
    localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
    this.useCredentials(credentials);
    
  }

  useCredentials(credentials: any) {
    this.isAuthenticated = true;
    this.sendUsername(credentials.username);
    this.authToken = credentials.token;
  }

  destroyUserCredentials() {
    this.authToken = undefined;
    this.clearUsername();
    this.isAuthenticated = false;
    localStorage.removeItem(this.tokenKey);
    document.cookie="jwt=fceveo;max-age=0"
    console.log(document.cookie);
    window.location.href= '/'
  }

  signUp() { }

  login(loginData): Observable<any>{
    return this.http.post<any>('users/login',loginData)
    .pipe(map(res=>{
      if(res.success==true){
      this.storeUserCredentials({username:loginData.username,token:res.token});
      return {'success':true,'username':loginData.username};
    }
    else {
      return {'success':false, 'err':res.err}
    }

    }),
    catchError((error)=>this.processHTTPMsgService.handleError(error))
   )
  }
  
   logOut() {
    this.destroyUserCredentials();
  }

  isLoggedIn(): Boolean {
    if(JSON.parse(localStorage.getItem(this.tokenKey)))
    return true;
    else false;
  }

  getUsername(): Observable<string> {
    return this.username.asObservable();
  }

  getToken(): string {
    if(JSON.parse(localStorage.getItem(this.tokenKey))){
      return this.authToken = JSON.parse(localStorage.getItem(this.tokenKey)).token;
    }
    else
      return this.authToken=undefined;
  }
}
