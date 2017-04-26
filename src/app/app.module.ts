import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { CardComponent } from './_components/card/card.component';

import { AuthenticationService } from './_services/authentication.service';
import { ProfileComponent } from './_components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
