import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParsingService } from 'src/app/services/parsing.service';
import { FullName } from 'src/app/classes/full-name';
import { GetInputPattern } from 'src/app/classes/patterns.enum';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.scss']
})
export class ParserComponent implements OnInit {
  fullName:string;
  fullNameParsed:FullName;
  inputPattern:string =GetInputPattern();
  
  constructor(private parsing:ParsingService) { 
  }

  ngOnInit() {
    
  }

  submitForm(form:NgForm){

    if(form.invalid){
      console.log("form was invalid");
      return;
    }

    this.fullName=form.value.fullName;
    this.fullNameParsed=this.parsing.parseFullName(this.fullName);
  }
}
