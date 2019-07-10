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
  inputPattern:string;
  fullName:string;
  fullNameParsed:FullName;
  parsedResults:FullName[];
  successfulSubmit:boolean;
  
  constructor(private parsing:ParsingService) { 
    this.resolveParsing = this.resolveParsing.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
  }

  ngOnInit() {
    this.parsedResults=[];
    this.inputPattern=GetInputPattern();
  }

  submitForm(form:NgForm):void{

    if(form.invalid){
      console.log("form was invalid");
      return;
    }

    this.fullName=form.value.fullName;
    this.parsing.parseFullName(this.fullName).then(this.resolveParsing,this.errorHandler);
    form.resetForm();
  }

  private resolveParsing(fullNameParsed:FullName):void{
    this.fullNameParsed=fullNameParsed;
    this.parsedResults.push(this.fullNameParsed);
  }

  private errorHandler(err:string):void{
    console.log(err);
  }

  onDeleteClicked(nameIdToBeDeleted:FullName){
    this.parsedResults.splice(this.parsedResults.indexOf(nameIdToBeDeleted),1);
  }

}
