import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators, NgForm } from "@angular/forms";
import { CreatePostService } from '../services/create-post.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  @ViewChild("pform") postFormDirective:NgForm;
  postForm:FormGroup;
  post;

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

  constructor(private fb:FormBuilder, private createPostService:CreatePostService, private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.postForm=this.fb.group({
      Title:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      Description:['',[Validators.required,Validators.minLength(10)]],
      Category:['',[Validators.required]],
    });
    this.postForm.valueChanges
    .subscribe((data)=>{
      this.onValueChanges(data)
    });
    this.onValueChanges();
  };

    onValueChanges(Data?:any){
      if(!this.postForm)
      return
      const form =this.postForm;
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

    OnSubmit(){
      this.post=this.postForm.value;
      this.createPostService.createPost(this.post).subscribe(()=>{
        this.router.navigate(['home'])
      });
      console.log(this.post);
      this.postForm.reset({
        Title:'',
        Description:'',
        Category:''
      })
      this.postFormDirective.resetForm();
    };

}
