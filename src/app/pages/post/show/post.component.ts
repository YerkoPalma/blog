import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FirestorageService } from 'src/app/services/firestorage.service';

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
    private storage: FirestorageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('slug');
      this.url = this.storage.getFileUrl(`posts/${this.slug}.md`);
    });
  }

}
