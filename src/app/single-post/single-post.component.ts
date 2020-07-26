import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router'
import { CommentService } from '../services/comment.service';
import { LikeService } from '../services/like.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
post;
Like="Like";
Unlike="Unlike";
Comments;
comment;
likeCount;
liked:Boolean=false;
username = JSON.parse(localStorage.getItem('JWT')).username;
likesLocal:any;
flag=false;
  constructor(private postService:PostService, 
    private route:ActivatedRoute, 
    private commentService:CommentService,
    private likeService: LikeService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.postService.getPost(this.route.snapshot.paramMap.get('postId')).subscribe((post)=> {
      this.post=post;
      console.log(post.likes.length);
      this.Comments=post.Comments;
      this.likeCount=post.likes.length;
      console.log(post);
      this.likesLocal=post.likes;
      for(let like=0;like<this.likesLocal.length;like++){
        console.log(this.likesLocal[like].username)
      if(this.likesLocal[like].username==this.username)
        this.liked=true;
      }
    })
  }
  postComment(){
    this.commentService.postComment(this.route.snapshot.paramMap.get('postId'),{Comment:this.comment}).subscribe((Comment)=>{
      this.Comments=Comment;
    })
  }
  like(){
      this.likeService.postlike(this.route.snapshot.paramMap.get('postId')).subscribe((likes)=>{
      this.likesLocal=likes;
      this.likeCount=likes.length;
    });
      console.log("After like event"+ this.likesLocal);
      
      for(let like=0;like<this.likesLocal.length;like++){
        if(this.likesLocal[like].username==this.username){
          console.log('in if cond')
          this.liked=true; 
          console.log(this.liked);
          this.flag=true;
          return;
        }
        else if(this.likesLocal[like].username!=this.username){
          console.log("in else if cond");
          this.flag=false;
          continue;
        }
        
         
        
    }

    if(this.flag==false){
      console.log('in else cond')
      this.liked=false;
      console.log(this.liked);
    }
    
  }

}
