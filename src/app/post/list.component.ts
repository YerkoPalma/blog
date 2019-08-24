import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  viewingDrafts = true;
  viewingPublished = false;
  constructor() { }

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

}
