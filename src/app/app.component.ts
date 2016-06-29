import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  currentHero = {
    firstName: 'Will'
  };

  onSubmit(form) {
    console.log(form);
    alert('表單送出');
  }
}
