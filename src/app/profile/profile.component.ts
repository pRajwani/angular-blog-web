import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post.service";
import { baseImageUrl } from "../shared/baseUrl";
import { TimeoutService } from '../services/timeout.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
myPosts;
username;
name;
baseImageUrl=baseImageUrl;

  constructor(private postService:PostService,private timeoutService:TimeoutService) { }

  ngOnInit(): void {
    if(localStorage.getItem('JWT')){
      this.username=JSON.parse(localStorage.getItem('JWT')).username;
      this.postService.getPosts().subscribe((posts)=>{
      this.myPosts= posts.filter(o=>{ return o.postAuthor.username==this.username;})
      if(this.myPosts.length>0){
        this.name=this.myPosts[0].postAuthor.name;
      }
      else{
        this.myPosts=null;
      }
      });
    }
  }

  delete(post_id){
    this.postService.deletePost(post_id).subscribe();
    this.myPosts=this.myPosts.filter(o=>{return o._id!=post_id});
    if(this.myPosts.length == 0) 
      window.location.reload();
  }

}
