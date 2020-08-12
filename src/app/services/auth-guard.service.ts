import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private loginService:LoginService,private router:Router) { }
  canActivate():boolean{
    if(this.loginService.isLoggedIn())
    return true;
    else{
      this.router.navigate(['/']);
    return false;
  }
}
}
