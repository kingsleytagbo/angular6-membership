import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(
    private _AuthenticationService: AuthenticationService,) { 
      this.isAuthenticated = this._AuthenticationService.isAuthenticated();
    }

  ngOnInit() {
  }

  public user = new User();
  public displayMsg = '';

  register() {
    if (!this._AuthenticationService.register(this.user)) {
      this.displayMsg = 'Failed to register ...';
    }
    else{
      this.displayMsg = 'Successfully registered ...';
    }
  }
}
