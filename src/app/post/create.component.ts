import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {}

  togglePreview() {
    this.preview = !this.preview;
  }
}
