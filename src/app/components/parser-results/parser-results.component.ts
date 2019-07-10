import { Component, OnInit } from '@angular/core';
import { FullName } from 'src/app/classes/full-name';

@Component({
  selector: 'app-parser-results',
  templateUrl: './parser-results.component.html',
  styleUrls: ['./parser-results.component.scss']
})
export class ParserResultsComponent implements OnInit {
  parsedNames:FullName[]=[];
  
  constructor() { }

  ngOnInit() {
    const example:FullName= new FullName();
    example.firstName="George";
    example.middleName="W.";
    example.lastName="Bush";
    this.parsedNames.push(example);

    const example2:FullName= new FullName();
    example2.prefix="Ms.";
    example2.firstName="Jane";
    example2.middleName="A.";
    example2.lastName="Doe";

    this.parsedNames.push(example2);
    this.parsedNames.push(example);
    this.parsedNames.push(example2);
    this.parsedNames.push(example2);
    this.parsedNames.push(example);
    this.parsedNames.push(example2);
    this.parsedNames.push(example2);
    this.parsedNames.push(example);
    this.parsedNames.push(example2);
  }

}
