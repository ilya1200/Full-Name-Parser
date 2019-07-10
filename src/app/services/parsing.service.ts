import { Injectable } from '@angular/core';
import { FullName } from '../classes/full-name';
import { FirstNameFirst, LastNameFirst, Patterns } from 'src/app/classes/patterns.enum';


@Injectable({
  providedIn: 'root'
})
export class ParsingService {
  private fullNameParsed: FullName;
  private patterns: string[] = [FirstNameFirst, LastNameFirst];

  constructor() { }

  public parseFullName(fullName: string): Promise<FullName> {
    const fullNamePromise: Promise<FullName> = new Promise<FullName>((resolve: Function, reject: Function) => {
      setTimeout(() => {
        const splitedName: string[] = fullName.trim().split(/\s+/);
        let current: number = 0;
        this.fullNameParsed = new FullName();

        if (splitedName[current].indexOf(".") >= 0) {
          this.fullNameParsed.prefix = splitedName[current];
          current++;
        }
        if (fullName.match("^" + this.patterns[0] + "$")) {
          this.fullNameParsed.firstName = splitedName[current];
          current++;
          if (splitedName.length - current == 3) {
            this.fullNameParsed.middleName = splitedName[current++];
            this.fullNameParsed.lastName = splitedName[current++];
            this.fullNameParsed.suffix = splitedName[current++];
          } else if (splitedName.length - current == 1) {
            this.fullNameParsed.lastName = splitedName[current];
          } else if (splitedName.length - current == 2 && splitedName[splitedName.length - 1].match("^" + Patterns.Suffix + "$")) {
            this.fullNameParsed.lastName = splitedName[current++];
            this.fullNameParsed.suffix = splitedName[current++];
          } else {
            this.fullNameParsed.middleName = splitedName[current++];
            this.fullNameParsed.lastName = splitedName[current++];
          }
        } else if (fullName.match("^" + this.patterns[1] + "$")) {
          this.fullNameParsed.lastName = splitedName[current].replace(',', '');
          current++;
          this.fullNameParsed.firstName = splitedName[current++];
          if (current < splitedName.length && splitedName[current].match("^" + Patterns.Middle + "$") && (splitedName[current].indexOf('.') == -1 || splitedName[current].length == 2)) {
            this.fullNameParsed.middleName = splitedName[current];
            current++;
          }

          if (current < splitedName.length && splitedName[current].match("^" + Patterns.Suffix + "$")) {
            this.fullNameParsed.suffix = splitedName[current];
            current++;
          }
        } else {
          reject("Invalid");
          return;
        }

        resolve(this.fullNameParsed);
      }, 1000);
    });// Promise
    return fullNamePromise;
  }
}
