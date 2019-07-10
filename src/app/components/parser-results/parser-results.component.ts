import { Component, OnInit } from '@angular/core';
import { FullName } from 'src/app/classes/full-name';

@Component({
  selector: 'app-parser-results',
  templateUrl: './parser-results.component.html',
  styleUrls: ['./parser-results.component.scss']
})
export class ParserResultsComponent implements OnInit {
  parsedNames:FullName[];
  
  constructor() { }

  ngOnInit() {
  }

}
