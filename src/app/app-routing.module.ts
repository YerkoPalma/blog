import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { CreateComponent } from './post/create.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then(mod => mod.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
