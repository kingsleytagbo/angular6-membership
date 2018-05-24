import { Component, OnInit,  TemplateRef, ViewChild } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import {User} from './user';
import {UserService} from './user.service';
import { AuthenticationService } from '../shared/services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  //1. Template Ref types 
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  //2. Other Variables
  UserID: string;
  message: string;
  User: User;
  selectedUser: User;
  users: Array<User>;
  isNewRecord: boolean;
  statusMessage: string;
  UserEditState: string;

  //3. Constructor injected with the Service Dependency
  constructor(private _UserService: UserService, private _AuthenticationService: AuthenticationService) {
      this.users = new Array<User>();
      this.message = 'Users';
  }

  //4. Load all Users
  ngOnInit() {
      this.loadUser();
      this._AuthenticationService.checkCredentials();
  }


  private loadUser() {
      this.UserEditState == "read";
      var items = this
          ._UserService
          .getUsers();
          this.users = items;
          console.log('user.component.ts');
          console.log(this.users);
  }
  
  
  //5. Add User
  addUser() {
      this.UserEditState == "edit";
      this.selectedUser = new User();
      this.users.push(this.selectedUser);
      this.isNewRecord = true;
      console.log('adding Users ...');
      console.log(this.selectedUser);
      //return this.editTitemlate;
  }

  //6. Edit User
  editUser(item: User) {
      this.UserEditState == "edit";
      this.selectedUser = item;
      console.log('edit User detals')
      console.log(this.selectedUser);
  }

  //7. Load either Read-Only Titemlate or EditTemplate
  loadTemplate(item: User) {
      if (this.selectedUser && this.selectedUser._id == item._id) {
          //if(this.UserEditState == "edit"){
          return this.editTemplate;
      } else {
          return this.readOnlyTemplate;
      }
  }

  //8. Save User
  saveUser() {
      this.UserEditState == "save";
      if (this.isNewRecord) {
          //add a new User
          this._UserService.addUser(this.selectedUser).subscribe((resp: Response) => {
              this.User = resp.json(),
                  this.statusMessage = 'User Added Successfully.',
                  this.loadUser();
          });
          this.isNewRecord = false;
          this.selectedUser = null;

      } else {
          //edit the record
          console.log('updating User ');
          console.log(this.selectedUser._id);
          console.log(this.selectedUser);
          this._UserService.updateUser(this.selectedUser._id, this.selectedUser).subscribe((resp: Response) => {
              this.statusMessage = 'User Updated Successfully.',
              this.loadUser();
          });
          this.selectedUser = null;

      }
  }

  //9. Cancel edit
  cancel() {
      this.UserEditState == "cancel";
      this.selectedUser = null;
      this.loadUser();
  }

  //10 Delete User
  deleteUser(User: User) {
      this.UserEditState == "delete";
      this._UserService.deleteUser(User._id).subscribe((resp: Response) => {
          this.statusMessage = 'User Deleted Successfully.',
          this.loadUser();
      });
  }

    //11 initiliaze for paging with ngx-paginate
    p: number = 1;


  toggleUserComplete(user) {
    this._UserService.toggleUserComplete(user);
  }
  
  removeUser(user) {
    this._UserService.deleteUserById(user._id);
  }
  
  getUsers() {
    let items = this._UserService.getAllUsers();
    this.users = items;
    console.log({'users > getUsers': this.users});
    return this.users;
  }

}
