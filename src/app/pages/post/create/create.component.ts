import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import slugify from '@sindresorhus/slugify';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '../../../models/post';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

const WORDS_PER_ABSTRACT = 15;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPostForm = this.builder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    abstract: [''],
    slug: [''],
    tags: ['']
  });
  preview = false;
  uploadPercent: Observable<number>;

  constructor(
    private builder: FormBuilder,
    private store: AngularFirestore,
    private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  async onSubmit() {
    // TODO:
    //  - check if there are draft with the same slug already exists
    //  - make tags an empty array or discard it
    //  - add date
    //  - add author
    await this.store.collection<Post>('drafts').add(this.newPostForm.value);

    // TODO:
    //  - Once saved, add a document
    const documentData = new Blob([(this.newPostForm.get('content') as FormControl).value], { type: 'application/octet-stream'});
    const fileName = `drafts/${(this.newPostForm.get('slug') as FormControl).value}.md`;
    const task = this.storage.ref(fileName).put(documentData);
    this.uploadPercent = task.percentageChanges();
  }

  getSlug() {
    const slug = this.newPostForm.get('slug') as FormControl;
    const title = this.newPostForm.get('title') as FormControl;
    slug.setValue(slugify(title.value));
  }

  getAbstract() {
    const abstract = this.newPostForm.get('abstract') as FormControl;
    const content = this.newPostForm.get('content') as FormControl;
    let abstractText = /#.*?\n+([\s\S]*)/.exec(content.value)
                        ? /#.*?\n+([\s\S]*)/.exec(content.value)[1]
                        : content.value;
    abstractText = abstractText.split(' ').length > WORDS_PER_ABSTRACT
                  ? abstractText.split(' ').slice(0, WORDS_PER_ABSTRACT).join(' ')
                  : abstractText;
    abstract.setValue(abstractText);
  }

  togglePreview() {
    this.preview = !this.preview;
  }
}
