import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  viewingDrafts = true;
  viewingPublished = false;

  constructor(
    private router: Router,
    private blog: BlogService) { }

  ngOnInit() {
  }

  viewDrafts() {
    this.viewingDrafts = true;
    this.viewingPublished = false;
  }

  viewPublished() {
    this.viewingDrafts = false;
    this.viewingPublished = true;
  }

  goToCreatePage() {
    this.router.navigateByUrl('/post/add');
  }

}
