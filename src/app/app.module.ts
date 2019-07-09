import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullNameComponent } from './full-name/full-name.component';
import { ParserComponent } from './parser/parser.component';

@NgModule({
  declarations: [
    AppComponent,
    FullNameComponent,
    ParserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
