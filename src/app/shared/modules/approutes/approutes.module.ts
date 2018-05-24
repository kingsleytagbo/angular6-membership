import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders }  from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';
import { routes } from './approutes-routing.module';

/*
@NgModule({
  imports: [
    CommonModule,
    ApproutesRoutingModule
  ],
  declarations: []
})
export class ApproutesModule { }
*/


//{useHash: true} 
//this value direcst whether hashtags or a real url is used. 
//If you use real urls, your server has to provide the supporting page: 
//eg. for /contacts your server will respond with a contacts.cshtml
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});  

