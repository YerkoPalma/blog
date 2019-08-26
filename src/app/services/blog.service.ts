import { Injectable } from '@angular/core';
import { PostsFirestore } from './posts.firestore';
import { AppStore } from './app.store';
import { tap, map } from 'rxjs/operators';
import { DraftsFirestore } from './drafts.firestore';
import { merge, Observable } from 'rxjs';
import { Post } from '../models/post';
import { Draft } from '../models/draft';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private postsFirestore: PostsFirestore,
    private draftsFirestore: DraftsFirestore,
    private store: AppStore
  ) {
    let postsLoaded = false;
    let draftsLoaded = false;
    merge(
      this.postsFirestore.collection$(),
      this.draftsFirestore.collection$()
    ).pipe(
      tap(data => {
        let newData = {
          loading: !postsLoaded && !draftsLoaded,
          postsLoaded,
          draftsLoaded
        };
        if (isPost(data)) {
          postsLoaded = true;
          newData = Object.assign({}, newData, {posts: data});
        } else {
          draftsLoaded = true;
          newData = Object.assign({}, newData, {drafts: data});
        }
        this.store.patch(newData, 'AppState updated!');
      })
    ).subscribe();
  }

  get posts$(): Observable<Post[]> {
    return this.store.state$.pipe(map(state => state.postsLoaded
      ? state.posts
      : []));
  }

  get drafts$(): Observable<Draft[]> {
    return this.store.state$.pipe(map(state => state.draftsLoaded
      ? state.drafts
      : []));
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loading));
  }

  get noDrafts$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.drafts.length === 0));
  }

  get noPosts$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.posts.length === 0));
  }

  createDraft(draft: Draft) {}
}

function isPost(post: Post[] | Draft[]): post is Post[] {
  if (Array.isArray(post) && post.length > 0 && (post as Post[])[0].tags) { return true; }
  return false;
}
