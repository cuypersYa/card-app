/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../../app.routes';
import { APP_BASE_HREF } from '@angular/common';

import { AuthenticationService } from '../../_services/authentication.service';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component' ;
import { CardComponent } from './card.component';

import { MapToIterablePipe } from '../../_pipes/map-to-iterable.pipe';
//import { User } from '../../_class/user';
 
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  // global variable
  let username='test@test.be';
  let pass='pass';
  let values= {
              name:'Yannick Cuypers',
              address: {
                  street:'Street',
                  number:'29',
                  zipcode: '2000',
                  city:'City'
              },
              bio:'Webapplication developer',
              points:780
          }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule,HttpModule,FormsModule ],
      declarations: [ LoginComponent,CardComponent, ProfileComponent, MapToIterablePipe ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },AuthenticationService] 

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the card component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a user', () => {
    expect(component.user.email).toEqual(username);
    expect(component.user.password).toEqual(pass);
    expect(component.user.loggedin).toEqual(true);
  });
  it('should add a point to user and remove them', () => {
      expect(component.user.values.points).toEqual(0);
      component.doUpdatePoints(10);
      expect(component.user.values.points).toEqual(10);
      component.doUpdatePoints(-10);
      expect(component.user.values.points).toEqual(0);
  });

 
});
