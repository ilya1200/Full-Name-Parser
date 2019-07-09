import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.scss']
})
export class ParserComponent implements OnInit {
  fullName:string;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form:NgForm){

    if(form.invalid){
      console.log("form was invalid");
      return;
    }

    this.fullName=form.value.fullName;
    console.log(this.fullName);
  }

}
