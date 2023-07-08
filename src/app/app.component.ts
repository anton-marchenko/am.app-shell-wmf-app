import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-shell-mock-app-wmf';

  goToApp(alias: string) {
    window.parent.postMessage({
      type: 'goToApp',
      alias
    }, '*');
  }
}
