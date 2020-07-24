import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData;
  loginData={
    username:null,
    password:null
  }

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  OnSubmit() {
    this.loginService.login(this.loginData).subscribe(userData=>{
      this.userData=userData;
      if(userData.success==true)
        this.router.navigate(['/','home'])
      console.log(userData);
    })
  }
}
