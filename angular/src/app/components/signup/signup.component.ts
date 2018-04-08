import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthenticationService} from '../../services/authentication.service';
//import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:String;
  role:String;
  e_mail:String;
  password:String;

  constructor(
      private validateService:ValidateService,
      private authenticationService:AuthenticationService,
      private router :Router

  ) { }

  ngOnInit() {
  }
  onSignup(){
    const user={
      name:this.name,
      role:this.role,
      e_mail:this.e_mail,
      password:this.password

    }
    if(!this.validateService.checkUserValidity(user)){
      console.log('please fill all fields');
      return false;
    }
    if(!this.validateService.checkEmailValidity(user.e_mail)){
      console.log('please enter valid e-mail address');
      return false;
    }

    //when signing up
    this.authenticationService.newUserSignup(user).subscribe(function (data) {
      if(data.success){
        console.log('Now you are user of PmA ');
        //this.router.navigate(['/login']);
      }else{
        console.log('wrong in registration. try again');
        //this.router.navigate(['/signup']);

      }

    })

  }

}
