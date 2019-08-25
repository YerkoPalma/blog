import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './show/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent, CreateComponent, PostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    PostRoutingModule
  ]
})
export class PostModule { }
