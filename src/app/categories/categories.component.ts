import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import {Params, ActivatedRoute } from '@angular/router';
import { baseImageUrl } from "../shared/baseUrl";
import { switchMap } from 'rxjs/operators';
import { TimeoutService } from '../services/timeout.service';
//import { url } from 'inspector';
//import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  category;
  categoryPosts=[];
  baseImageUrl=baseImageUrl;
  
  constructor(private postService:PostService,private route:ActivatedRoute,private timeoutService:TimeoutService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.category=params.get('categoryName');
      this.displayPost();
    }) 
  }

  displayPost(){
    this.postService.getPosts().subscribe((data)=>{
      this.categoryPosts=data.filter(o=>{return o.Category==this.category})
    });
  }
}
