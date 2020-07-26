import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { SignupComponent } from './signup/signup.component'
import { CreatePostComponent } from './create-post/create-post.component';


const routes: Routes = [
  {path:'home',component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'post/:postId', component:SinglePostComponent},
  {path: 'signup', component:SignupComponent},
  {path:'newpost',component:CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  hide = true;
 }
