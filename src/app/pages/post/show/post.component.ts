import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  slug: string;
  url: Observable<string | null>;

  constructor(
    private route: ActivatedRoute,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('slug');
      this.url = this.storage.ref(`posts/${this.slug}.md`).getDownloadURL();
    });
  }

}
