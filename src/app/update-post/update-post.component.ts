import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router,ActivatedRoute } from "@angular/router";
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageUploadService } from '../services/image-upload.service';
import { TimeoutService } from '../services/timeout.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  @ViewChild("uform") updateFormDirective:NgForm;
  updateForm:FormGroup;
  post;
  updatedPost;

  formErrors={
    Title:"",
    Description:"",
    Category:""
  };

  validationMessages={
    Title:{
      required:"Title is required",
      minlength:"Title must be atleast 2 characters long",
      maxlength:"Title can't be of more than 50 characters"
    },
    Category:{
      required:"Category is required"
    },
    Description:{
      required:"Description is required",
      minlength:"Description must be atleast 10 characters long",
    }
  };
  selectedFile = {name:''};

  constructor(private router:Router,private fb:FormBuilder,private route:ActivatedRoute,private postService:PostService,private imageUploadService:ImageUploadService,private timeoutService:TimeoutService) { }

  ngOnInit(): void {
    if(localStorage.getItem('JWT')) { 
      this.postService.getPost(this.route.snapshot.paramMap.get('postId')).subscribe((post)=>{
        this.post=post;
        //this.selectedFile.name=this.post.image;
        this.createForm();
      })
    } 
  }
    createForm() {
      this.updateForm=this.fb.group({
        Title:[this.post.Title,[Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
        Description:[this.post.Description,[Validators.required,Validators.minLength(10)]],
        Category:[this.post.Category,[Validators.required]],
        image:[this.post.image]
      });
      this.updateForm.valueChanges
      .subscribe((data)=> {
        this.onValueChanges(data)
      });
      this.onValueChanges();
    };
      onValueChanges(Data?:any){
        if(!this.updateForm)
        return
        const form =this.updateForm;
        for(const field in this.formErrors){
          if(this.formErrors.hasOwnProperty(field)){
            this.formErrors[field]='';
            const control=form.get(field);
            if(control&&control.dirty&&!control.valid){
              const messages=this.validationMessages[field];
              for(const key in control.errors){
                if(control.errors.hasOwnProperty(key)){
                  this.formErrors[field]+=messages[key]+" ";
                }
              }
            }
          }
        }
      }

      onFileChange(event){
        this.selectedFile=event.target.files[0];
      }
      
    updatePost(){
      console.log(this.selectedFile);
      var uploadData=null;
      this.updatedPost=this.updateForm.value;
      
      if(this.selectedFile.name!==''){
        this.updatedPost.image=this.selectedFile.name
        this.post.image=this.selectedFile.name;
        uploadData = new FormData();
        uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      }
      let post_id=this.route.snapshot.paramMap.get('postId');
      if(this.updatedPost!=this.post){
        this.postService.updatePost(post_id,this.updatedPost).subscribe((post)=>{
          if(uploadData!==null)
          this.imageUploadService.uploadImage(uploadData).subscribe();
          this.router.navigate(['profile']);
      });
    }
    else
      this.router.navigate(['profile']);
    }

}
