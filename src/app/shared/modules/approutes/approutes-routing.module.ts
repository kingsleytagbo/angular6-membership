import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../../../user/user.component';
import { LoginComponent } from '../../../membership/login/login.component';
import { ForgotpasswordComponent } from '../../../membership/forgotpassword/forgotpassword.component';
import { RegisterComponent } from '../../../membership/register/register.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  }
  ,
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproutesRoutingModule { }


