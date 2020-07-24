import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router'
import { CommentService } from '../services/comment.service';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
post;
Comments;
comment;
likes;
  constructor(private postService:PostService, 
    private route:ActivatedRoute, 
    private commentService:CommentService,
    private likeService: LikeService) { }

  ngOnInit(): void {
    this.postService.getPost(this.route.snapshot.paramMap.get('postId')).subscribe((post)=> {
      this.post=post;
      console.log(post.likes.length);
      this.Comments=post.Comments;
      this.likes=post.likes.length;
      console.log(post);
    })
  }
  postComment(){
    this.commentService.postComment(this.route.snapshot.paramMap.get('postId'),{Comment:this.comment}).subscribe((Comment)=>{
      this.Comments=Comment;
    })
  }
  like(){
    this.likeService.postlike(this.route.snapshot.paramMap.get('postId')).subscribe((like)=>{
      this.likes=like;
    });
  }

}
