/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../../app.routes';
import { APP_BASE_HREF } from '@angular/common';

import { AuthenticationService } from '../../_services/authentication.service';
import { LoginComponent } from './login.component';
import { CardComponent } from '../card/card.component';
import { ProfileComponent } from '../profile/profile.component' ;

import { MapToIterablePipe } from '../../_pipes/map-to-iterable.pipe';
 
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule,HttpModule,FormsModule ],
      declarations: [ LoginComponent, CardComponent, ProfileComponent, MapToIterablePipe ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, AuthenticationService] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });
});
