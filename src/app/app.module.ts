import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { routing } from '../app/shared/modules/approutes/approutes.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { UserRoleService } from './userrole/userrole.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { LoginComponent } from './membership/login/login.component';
import { ForgotpasswordComponent } from './membership/forgotpassword/forgotpassword.component';
import { RegisterComponent } from './membership/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [AuthenticationService, UserService, UserRoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
