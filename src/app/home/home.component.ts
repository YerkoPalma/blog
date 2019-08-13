import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Post {
  title: string;
  abstract: string;
  date: Timestamp;
  slug: string;
  tags: string[];
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private db: AngularFirestore) {
    this.posts = db.collection<Post>('posts').valueChanges();
  }

  ngOnInit() {
  }

}
