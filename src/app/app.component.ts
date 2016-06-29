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

  isActive = false;

  currentHero = {
    firstName: 'Will'
  };

  isSpecial = true;

}
