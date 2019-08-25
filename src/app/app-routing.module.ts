import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/show/post.component';
import { CreateComponent } from './pages/post/create/create.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then(mod => mod.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
