import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
//import { MatFormField } from '@angular/material/form-field';

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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    PostService,
    CommentService,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
