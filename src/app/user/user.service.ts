import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import { map, filter, switchMap, mergeMap } from 'rxjs/operators';
import {User} from '../user/user';

@Injectable()
export class UserService {
  constructor(private http:Http) {}

      //3. The local private variable for  storing the URL of the REST API
private servUrl = "http://localhost:3444"+ '/users';

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for user's
  users: User[] = [];

  getUserLists(): Observable < any >{
    return this.http.get(this.servUrl);
}

getUsers(): Array < User >{
  let result = this.http.get(this.servUrl);
  let list = Array<any>();
  result.pipe(mergeMap((response) => response.json()))
  .subscribe((items) => {
      list.push(items);
    });
  console.log(list);
  console.log(new User());
  return list;
}

  //6. Function to perform POST operation to create a new user
  addUser(item : User) : Observable < Response > {
    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: header});
   return this
        .http
        .post(this.servUrl, JSON.stringify(item), options)
}

//7. Function to update user using PUT operation
updateUser(UserID:string,item : User) : Observable < Response > {
    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: header});
   return this
        .http
        .put(this.servUrl+`/`+UserID, JSON.stringify(item), options)
}

//8. Function to remove the user using DELETE operation
deleteUser(UserID:string) : Observable < Response > {
   return this
        .http
        .delete(this.servUrl+`/`+UserID)
}


  // Simulate DELETE /users/:id
  deleteUserById(id: string): UserService {
    this.users = this.users
      .filter(user => user._id !== id);
    return this;
  }

  // Simulate PUT /users/:id
  updateUserById(id: string, values: Object = {}): User {
    let user = this.getUserById(id);
    if (!user) {
      return null;
    }
    Object.assign(user, values);
    return user;
  }

  // Simulate GET /users
  getAllUsers():  Array<User> {
    return this.getUsers();
  }

  // Simulate GET /users/:id
  getUserById(id: string): User {
    return this.users
      .filter(user => user._id === id)
      .pop();
  }

  // Toggle user complete
  toggleUserComplete(user: User){
    let updatedUser = this.updateUserById(user._id, {
      IsApproved: !user.IsApproved
    });
    return updatedUser;
  }

}
