import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  isSpecial = true;

  canSave = true;
  isUnchanged = true;

  setClasses() {
    let classes =  {
      saveable: this.canSave,      // true
      modified: this.isUnchanged,  // true
      special: !this.isSpecial,    // false
    };
    return classes;
  }
}
