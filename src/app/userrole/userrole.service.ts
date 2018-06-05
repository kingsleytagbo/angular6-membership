import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap, mergeMap } from 'rxjs/operators';
import { UserRole } from '../userrole/userrole';
import { Role } from '../role/role';


@Injectable()
export class UserRoleService {
  constructor(private http: Http) { }

  //3. The local private variable for  storing the URL of the REST API
  private servUrl = "http://localhost:3444" + '/userroles';

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for UserRole's
  UserRoles: UserRole[] = [];

  getUserRoleLists(): Observable<any> {
    return this.http.get(this.servUrl);
  }

  getUserRoles(): Array<UserRole> {
    let result = this.http.get(this.servUrl);
    let list = Array<any>();
    result.pipe(mergeMap((response) => response.json()))
      .subscribe((items) => {
        list.push(items);
      });
    console.log(list);
    console.log(new UserRole());
    return list;
  }

  //6. Function to perform POST operation to create a new UserRole
  addUserRole(item: UserRole): Observable<Response> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    let data = this
      .http
      .post(this.servUrl + `/`, JSON.stringify(item), options);

    return data;
  }

  //7. Function to update UserRole using PUT operation
  updateUserRole(UserRoleID: string, item: UserRole): Observable<Response> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    let data = this
      .http
      .put(this.servUrl + `/` + UserRoleID, JSON.stringify(item), options);

    return data;
  }

  //8. Function to remove the UserRole using DELETE operation
  deleteUserRole(UserRoleID: string): Observable<Response> {
    return this
      .http
      .delete(this.servUrl + `/` + UserRoleID);
  }


  // Simulate DELETE /UserRoles/:id
  deleteUserRoleById(id: string): UserRoleService {
    this.UserRoles = this.UserRoles
      .filter(UserRole => UserRole._id !== id);
    return this;
  }

  // Simulate PUT /UserRoles/:id
  updateUserRoleById(id: string, values: Object = {}): UserRole {
    let UserRole = this.getUserRoleById(id);
    if (!UserRole) {
      return null;
    }
    Object.assign(UserRole, values);
    return UserRole;
  }

  // Simulate GET /UserRoles
  getAllUserRoles(): Array<UserRole> {
    return this.getUserRoles();
  }

  // Simulate GET /UserRoles/:id
  getUserRoleById(id: string): UserRole {
    return this.UserRoles
      .filter(UserRole => UserRole._id === id)
      .pop();
  }

  getAllUserRolesByUserId(id: string): Array<UserRole> {
    let result = this.http.get(this.servUrl+ `/` + id);
    let list = Array<any>();
    result.pipe(mergeMap((response) => response.json()))
      .subscribe((items) => {
        list.push(items);
      });
    console.log({"getAllUserRolesByUserId>" : {id: id, items: list}});
    return list;
  }

  getAllRoles(): Array<Role>{
    let items : Array<string> = ['Anonymous', 'Public', 'Subscriber', 'Author', 'Admin', 'Super Admin'] ;
    let roles : Array<Role> = new Array<Role>();
    for(let i = 0; i < items.length; i++)
    {
      let role =  new Role();
      role.Name = items[i].trim().toLowerCase();
      role.Description = items[i];
      roles.push(role);
    }
    return roles;
  }


}
