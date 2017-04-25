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
import { CardComponent } from './card.component';
 
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule,HttpModule,FormsModule ],
      declarations: [ LoginComponent,CardComponent ],
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
});
