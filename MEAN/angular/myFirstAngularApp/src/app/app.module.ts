import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'; //make sure to import this
import {HttpModule} from '@angular/http'; // this one too
import { MyComponentComponent } from './my-component/my-component.component';
import { EmailsComponent } from './emails/emails.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    EmailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //add this
    HttpModule // and this too
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
