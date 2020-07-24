import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SinglePostComponent } from './single-post/single-post.component';


const routes: Routes = [
  {path:'home',component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'post/:postId', component:SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  hide = true;
 }
