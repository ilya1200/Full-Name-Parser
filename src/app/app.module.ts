import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullNameComponent } from './full-name/full-name.component';
import { ParserComponent } from './components/parser/parser.component';
import { ParserResultsComponent } from './components/parser-results/parser-results.component';
import { RouterModule } from '@angular/router';


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
    FormsModule,
    RouterModule.forRoot([
      { path: 'parser', component: ParserComponent },
      { path: '', redirectTo: 'parser', pathMatch: 'full' },
      { path: '**', redirectTo: 'parser', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
