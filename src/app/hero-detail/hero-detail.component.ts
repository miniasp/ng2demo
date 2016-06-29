import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: '/app/hero-detail/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  constructor() { }

  @Input()
  hero: {fullName: string};

  ngOnInit() { }

}
