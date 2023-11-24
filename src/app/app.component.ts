import { Component } from '@angular/core';
import { FireserviceService } from './fireservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private fireService: FireserviceService) {}

  home() {
    window.location.href = '/legal-pal';
  }

  logout() {
    this.fireService.logout()
      .then(() => {
        window.location.href = '/home'; // Replace with your homepage route
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  }
}
