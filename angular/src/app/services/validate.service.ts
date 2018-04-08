import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  checkUserValidity(user){
      if(user.name==undefined || user.role==undefined || user.e_mail==undefined || user.password==undefined ){
        return false;
      }else {
        return true;
      }
  }

  checkEmailValidity(e_mail){
    const checkValue=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkValue.test(e_mail);
  }
}
