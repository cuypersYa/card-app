/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../../app.routes';
import { APP_BASE_HREF } from '@angular/common';

import { LoginComponent } from './login.component';
import { CardComponent } from '../card/card.component';
 
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule,HttpModule,FormsModule ],
      declarations: [ LoginComponent,CardComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }] 

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
