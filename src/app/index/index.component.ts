import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  posts;
  name;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    if(localStorage.getItem('JWT'))
      this.name=JSON.parse(localStorage.getItem('JWT')).username;
    this.postService.getPosts().subscribe((posts)=>{
      this.posts=posts;
      console.log(posts);
    })
  }

}
