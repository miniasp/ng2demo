import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  onKeyUp($event) {
    console.log('您剛剛輸入: ' + $event.key + ' ('+$event.keyCode+')');
  }

  onCopy($event) {
    console.log($event);
  }
}
