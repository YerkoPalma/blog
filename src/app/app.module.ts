import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { registerLocaleData } from '@angular/common';
import localeCl from '@angular/common/locales/es-CL';
import { PostComponent } from './post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CreateComponent } from './post/create.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

registerLocaleData(localeCl);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: StorageBucket, useValue: 'blog-yp.appspot.com'},
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
