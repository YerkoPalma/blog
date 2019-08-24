import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ListComponent } from './list.component';
import { CreateComponent } from './create.component';
import { PostComponent } from './post.component';
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
