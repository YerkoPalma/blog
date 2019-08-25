import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Observable<Post[]>;
  tags: string[] = [];

  constructor(
    private db: AngularFirestore,
    private router: Router) {
    this.posts = db.collection<Post>('posts').valueChanges();
  }

  ngOnInit() {
  }

  shouldShow(post: Post) {
    if (this.tags === null || this.tags.length === 0) { return true; }
    return this.tags.some(tag => post.tags.indexOf(tag) > -1);
  }

  sortByTag(tag: string) {
    if (this.tags.indexOf(tag) < 0) { this.tags.push(tag); }
  }

  removeTagFiler(tag: string) {
    // tslint:disable-next-line: variable-name
    this.tags = this.tags.filter(_tag => _tag !== tag);
  }

  goToCreatePage() {
    this.router.navigateByUrl('/post');
  }
}
