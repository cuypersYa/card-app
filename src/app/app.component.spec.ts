/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { LoginComponent } from './_components/login/login.component';
import { CardComponent } from './_components/card/card.component';
import { ProfileComponent } from './_components/profile/profile.component';

import { AuthenticationService } from './_services/authentication.service';
import { MapToIterablePipe } from './_pipes/map-to-iterable.pipe';


describe('AppComponent', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, LoginComponent, CardComponent, ProfileComponent, MapToIterablePipe ],
      imports : [ HttpModule,  AppRoutingModule, FormsModule ],
      providers: [
      {provide: APP_BASE_HREF, useValue : '/' }, AuthenticationService
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Card app!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Card app');
  }));
  /*
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));*/

  


});
