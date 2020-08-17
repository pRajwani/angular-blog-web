import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { SinglePostComponent } from './single-post/single-post.component';


import { LoginService } from './services/login.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { ProcessHTTPMsgServiceService } from './services/process-httpmsg-service.service';
import { AuthInterceptor, UnauthorizedInterceptor } from './services/auth.interceptor';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreatePostService } from './services/create-post.service';
import { ProfileComponent } from './profile/profile.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';


//Comment for fun
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    SinglePostComponent,
    SignupComponent,
    CreatePostComponent,
    ProfileComponent,
    UpdatePostComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    PostService,
    CommentService,
    CreatePostService,
    ProcessHTTPMsgServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },{
      provide: LocationStrategy,useClass:HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 