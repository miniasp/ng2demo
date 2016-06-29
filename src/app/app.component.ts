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
  color = "#FF0000";

  canSave = true;
  isUnchanged = true;

  setStyles() {
    let styles = {
      // CSS property names
      'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
      'font-size':   this.isSpecial    ? '24px'   : '8px',     // 24px
    };
    return styles;
  }
}
