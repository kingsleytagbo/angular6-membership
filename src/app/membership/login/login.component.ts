import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from '../../user/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(
    private _AuthenticationService: AuthenticationService) { 
      this.isAuthenticated = this._AuthenticationService.isAuthenticated();
    }

  ngOnInit() {
  }

  public user = new User();
  public errorMsg = '';

  login() {
    if (!this._AuthenticationService.login(this.user)) {
      this.errorMsg = 'Failed to login ...';
    }
  }
}
