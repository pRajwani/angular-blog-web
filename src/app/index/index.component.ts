import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { baseImageUrl } from "../shared/baseUrl";
import { Route, Router } from "@angular/router";
import { TimeoutService } from '../services/timeout.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  posts;
  name;
  baseImageUrl=baseImageUrl;
  featuredPosts;
  route;
  
  constructor(private postService: PostService,private router:Router,private timeoutService:TimeoutService) { }

  ngOnInit(): void {
    this.route=this.router;
    if(localStorage.getItem('JWT')){
      this.name=JSON.parse(localStorage.getItem('JWT')).username;   
    }
    this.postService.getPosts().subscribe((posts)=>{
      this.posts=posts.sort((a,b)=>{return a.Views-b.View});
      this.featuredPosts=posts.filter((o)=>{return o.featured==true})
    })   
  }

}
  


