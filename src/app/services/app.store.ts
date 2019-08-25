import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { AppState } from '../models/posts.state';

@Injectable({
  providedIn: 'root'
})
export class AppStore extends StoreService<AppState> {
  protected store = 'posts';

  constructor() {
    super({
      loading: true,
      postsLoaded: false,
      draftsLoaded: false,
      posts: [],
      drafts: []
    });
  }
}
