import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { SignupComponent } from './signup/signup.component'
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path:'home',component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'post/:postId', component:SinglePostComponent},
  {path: 'signup', component:SignupComponent},
  {path:'newpost',component:CreatePostComponent,canActivate:[AuthGuardService]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'update/:postId',component:UpdatePostComponent,canActivate:[AuthGuardService]},
  {path:'category/:categoryName', component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:"top"})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  hide = true;
 }
