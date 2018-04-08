import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addletter',
  templateUrl: './addletter.component.html',
  styleUrls: ['./addletter.component.css']
})
export class AddletterComponent implements OnInit {
  letter_id:Number;
  add_no:String;
  add_street:String;
  add_area:String;
  add_city:String;

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    const Letter={
      letter_id:this.letter_id,
      add_no:this.add_no,
      add_street:this.add_street,
      add_area:this.add_area,
      add_city:this.add_city
    }
  }

}
