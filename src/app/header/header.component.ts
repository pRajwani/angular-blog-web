import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  flag=false;
  username;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('JWT')){
      this.flag=true;
      this.username=JSON.parse(localStorage.getItem('JWT')).username;
    }
  }

  loggingOut(){
    window.location.href = "6vd"
    this.loginService.logOut();
  }
} 
