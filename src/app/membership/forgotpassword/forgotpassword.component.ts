import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from '../../user/user';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  
  isAuthenticated: boolean = false;

  constructor(
    private _AuthenticationService: AuthenticationService) { 
      this.isAuthenticated = this._AuthenticationService.isAuthenticated();
    }

  ngOnInit() {
  }

  public user = new User();
  public errorMsg = '';

  recoverPassword() {
    if (!this._AuthenticationService.login(this.user)) {
      this.errorMsg = 'Failed to login ...';
    }
  }
}
