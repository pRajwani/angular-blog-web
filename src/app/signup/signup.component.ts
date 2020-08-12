import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Router } from "@angular/router";
import { FormBuilder,FormGroup,Validators,NgForm } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild("signupForm") signupFormDirective:NgForm;
  signupForm:FormGroup;
  credentials;

  formErrors={
    username:"",
    name:"",
    password:""
  };

  validationMessages={
    username:{
      required:"Username is required",
      minlength:"Username must be atleast 5 characters long",
      maxlength:"Username can't be of more than 30 characters"
    },
    name:{
      required:"Name is required"
    },
    password:{
      required:"Password is required",
      minlength:"Password must be atleast 8 characters long",
      maxlength:"Password can't be of more than 20 characters"
    }
  };

  constructor(private signupService:SignupService,private router:Router,private fb:FormBuilder) { }

  SignupData= {
    username: null,
    name: null,
    password: null
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.signupForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      name:['',[Validators.required]],
    });
    this.signupForm.valueChanges
    .subscribe((data)=>{
      this.onValueChanges(data)
    });
    this.onValueChanges();
    };

    onValueChanges(Data?:any){
      if(!this.signupForm)
        return
      const form =this.signupForm;
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
    this.credentials=this.signupForm.value;
    this.signupService.onSubmit(this.credentials).subscribe((resp)=>{
      if(resp.success==true)
      this.router.navigate(['login'])
      else
      this.router.navigate(['signup'])
    });
    this.signupForm.reset({
      Title:'',
      Description:'',
      Category:''
    })
    this.signupFormDirective.resetForm();
  };

}
