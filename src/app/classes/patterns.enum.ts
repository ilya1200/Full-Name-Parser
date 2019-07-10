export enum Patterns {
    Prefix =  '([A-Z][a-z]+\\.[ ]+)?',
    FirstName = '[A-Z][a-z]+',
    Middle = '([A-Z](\\.|[a-z]+)[ ]*)?',
    LastName = '[A-Z][a-z]+',
    Suffix = '([ ]*[A-Z][A-Za-z]+(\\.))?[ ]*',
    Space = '[ ]+'
  }

  export const FirstNameFirst =        Patterns.Prefix + 
  Patterns.FirstName +
  Patterns.Space +
  Patterns.Middle +
  Patterns.LastName +
  Patterns.Suffix;

  export const  LastNameFirst = Patterns.Prefix + 
  Patterns.LastName + 
  '\,' +
  Patterns.Space +
  Patterns.FirstName +
  '[ ]*' +
  Patterns.Middle +
  Patterns.Suffix;

  

  export const GetInputPattern = function() {
    return `^(${FirstNameFirst}|${LastNameFirst})$`
  };





