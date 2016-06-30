import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  page = {
    title: "The Will Will Web",
    summary: "記載著 Will 在網路世界的學習心得與技術分享"
  };

  constructor() {
    this.page.title = "TEST";
  }

  ngOnInit() {
  }

}
