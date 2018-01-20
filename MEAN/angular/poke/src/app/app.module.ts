import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PokeComponent } from './poke/poke.component';
import { MonComponent } from './mon/mon.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    PokeComponent,
    MonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
