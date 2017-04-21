/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthenticationService } from '../../_services/authentication.service';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let authService: AuthenticationService;
  let username="yannick.cuypers@aarixa.be";
  let password="password";


  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService],
      declarations: [ CardComponent ],
      imports : [
        HttpModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create the card component', () => {
    authService.login(username,password);
    console.log('localstorage: ',localStorage.getItem('currentUser'))
    expect(component).toBeTruthy();
  });*/
});

