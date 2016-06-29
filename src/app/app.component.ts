import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeroDetailComponent]
})
export class AppComponent {
  title = 'app works!';

  heroes = [];

  constructor() {
    this.heroes.push({ id: 1, fullName: 'Will' });
    this.heroes.push({ id: 2, fullName: 'John' });
    this.heroes.push({ id: 3, fullName: 'Tom' });
    this.heroes.push({ id: 4, fullName: 'Jason' });
    this.heroes.push({ id: 5, fullName: 'Peter' });
  }

  trackByHeroes(index, hero) {
    return hero.id;
  }

  Refresh() {
    this.heroes = [];
    this.heroes.push({ id: 1, fullName: 'Will' });
    this.heroes.push({ id: 2, fullName: 'John' });
    this.heroes.push({ id: 3, fullName: 'Tom' });
    this.heroes.push({ id: 4, fullName: 'Jason' });
    this.heroes.push({ id: 5, fullName: 'Peter' });
  }

}
