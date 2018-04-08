import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

import {ValidateService}from './services/validate.service';
import {AuthenticationService}from './services/authentication.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AddletterComponent } from './components/addletter/addletter.component';




const appRoutes: Routes =[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'addletter',component:AddletterComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AddletterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    //FlashMessagesModule
  ],
  providers: [ValidateService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
