import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../user/user'

var users = [
  new User({EmailAddress: 'admin',Password:'123', Roles:['admin']}),
  new User({EmailAddress: 'user1@gmail.com',Password:'123', Roles:['subscriber']})
];
 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
 
  login(user){
    var authenticatedUser = users.find(u => u.EmailAddress === user.EmailAddress);
    if (authenticatedUser && authenticatedUser.Password === user.Password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['/']);      
      return true;
    }
    return false;
 
  }

  isAuthenticated()
  {
    let credential = localStorage.getItem("user");
    if (credential === null){
      return false;
    }
    else{
        return true;
    }
  }
 
   checkCredentials(){
     let credential = localStorage.getItem("user");
     console.log({"checkCredentials": credential});
    if (credential === null){
        this._router.navigate(['login']);
    }
  } 
}