import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FullName } from 'src/app/classes/full-name';


@Component({
  selector: 'app-parser-results',
  templateUrl: './parser-results.component.html',
  styleUrls: ['./parser-results.component.scss']
})
export class ParserResultsComponent implements OnInit {
  @Input() parsedNames:FullName[]=[];
  @Output() deleteClicked: EventEmitter<FullName>=new EventEmitter<FullName>();
  
  constructor() { }

  ngOnInit() {
  }

  delete(nameIdToBeDeleted:FullName){
    this.deleteClicked.emit(nameIdToBeDeleted);
  }

}
