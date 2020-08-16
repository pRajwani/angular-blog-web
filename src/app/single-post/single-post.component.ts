import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router'
import { CommentService } from '../services/comment.service';
import { LikeService } from '../services/like.service';
import { LoginService } from '../services/login.service';
import { baseImageUrl } from '../shared/baseUrl';
import { TimeoutService } from '../services/timeout.service';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
post;
Comments;
comment;
likeCount;
liked:Boolean=false;
username;
baseImageUrl=baseImageUrl;
likesLocal:any=[];

emptyLikesLocal = [{
  username: '',
  name: '',
  admin: false
}];

flag=false;

  constructor(private postService:PostService, 
    private route:ActivatedRoute, 
    private commentService:CommentService,
    private likeService: LikeService,
    private loginService: LoginService,
    private timeoutService:TimeoutService) { }

  ngOnInit(): void {
    if(localStorage.getItem('JWT')){
      this.username=JSON.parse(localStorage.getItem('JWT')).username;
    }
    this.postService.getPost(this.route.snapshot.paramMap.get('postId'))
    .subscribe((post)=> {
      this.post=post;
      this.Comments=post.Comments;
      this.likeCount=post.likes.length;
      if(this.likeCount == 0) 
        this.likesLocal = this.emptyLikesLocal;
      else 
        this.likesLocal=post.likes;
      for(let like=0;like<this.likesLocal.length;like++) {
        if(this.likesLocal[like].username==this.username) {
          this.liked=true;
          break;
        }
      }
    })
  }
  postComment(){
    if(localStorage.getItem('JWT')){
      this.commentService.postComment(this.route.snapshot.paramMap.get('postId'),{Comment:this.comment})
      .subscribe((Comment)=>{
        this.Comments=Comment;
      })
    }
    else
      alert('Please Login to Comment');
  }
  like(){
    if(localStorage.getItem('JWT')){
      this.likeService.postlike(this.route.snapshot.paramMap.get('postId'))
      .subscribe((post)=>{
        if(post.likes.length == 0) 
          this.likesLocal = this.emptyLikesLocal;
        else 
          this.likesLocal=post.likes;
        if(this.likesLocal[0].username == '') 
          this.likeCount = 0;
        else 
          this.likeCount=this.likesLocal.length;
        for(let like=0;like<this.likesLocal.length;like++){
          if(this.likesLocal[like].username==this.username){
            this.liked=true; 
            this.flag=true;
            return;
          }
          else if(this.likesLocal[like].username!=this.username){
            this.flag=false;
            continue;
          }      
        }
        if(this.flag==false){
          this.liked=false;
        }
      });
    }
    else{
      alert('Login First to Like')
    }
}
  isEditable(username){
    if(username==this.username){
      return true;
    }
  }
  deleteComment(commentId){
    this.commentService.deleteComment(this.route.snapshot.paramMap.get('postId'),commentId).subscribe();
    this.Comments=this.Comments.filter(o=>{return o._id!=commentId})
  }

}