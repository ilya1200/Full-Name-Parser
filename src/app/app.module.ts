import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullNameComponent } from './full-name/full-name.component';
import { ParserComponent } from './parser/parser.component';
import { ParserResultsComponent } from './parser-results/parser-results.component';


@NgModule({
  declarations: [
    AppComponent,
    FullNameComponent,
    ParserComponent,
    ParserResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
