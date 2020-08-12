import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router} from '@angular/router';
import { baseImageUrl } from "../shared/baseUrl";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData;
  baseImageUrl=baseImageUrl; 
  loginData={
    username:null,
    password:null
  }
  loginError;

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {}

  OnSubmit() {
    this.loginService.login(this.loginData).subscribe(userData=>{
      this.userData=userData;
      console.log(userData)
      if(userData.success==true)
        this.router.navigate(['/','home'])
      else{
        console.log(userData.err);
        this.loginError = userData.err.name;
      }

    })
    
  }
}
