import { Component } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Angular 6 Membership';

  constructor(
    private _AuthenticationService: AuthenticationService) { 
    }

    logout() {
      this._AuthenticationService.logout();
    }

    isAuthenticated(): boolean{
      return this._AuthenticationService.isAuthenticated();
    }
  }
  