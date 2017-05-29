import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PrettyJsonModule, SafeJsonPipe } from 'angular2-prettyjson';//see:https://github.com/matiboy/angular2-prettyjson
import { JsonPipe } from '@angular/common';

import { GithubService } from './providers/github.service';

import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PrettyJsonModule
  ],
  providers: [
    GithubService,
    { provide: JsonPipe, useClass: SafeJsonPipe }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
