import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create.component';
import { AuthGuard } from '../auth/auth.guard';
import { PostComponent } from './post.component';
import { ListComponent } from './list.component';


const routes: Routes = [
  {
    path: '', component: ListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add', component: CreateComponent, canActivate: [AuthGuard]
  },
  {
    path: ':slug', component: PostComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
