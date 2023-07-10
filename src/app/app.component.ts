import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule],
  standalone: true,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  goToApp(alias: string) {
    window.parent.postMessage({
      type: 'goToApp',
      alias
    }, '*');
  }
}
