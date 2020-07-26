import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:SignupService,private router:Router) { }
  SignupData= {
    username: null,
    name: null,
    password: null
  }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.signupService.onSubmit(this.SignupData).subscribe((resp)=>{
      if(resp.success==true)
      this.router.navigate(['login'])
      else
      this.router.navigate(['signup'])
    })
  }
}
