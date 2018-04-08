import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  authenticationToken:any;
  user:any;

  constructor(private http:Http) { }

  //function to handle back end when signing up
  newUserSignup(user){
    let header=new Headers();
    header.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/signup',user,{headers:header}).map(res=>res.json());}

}

