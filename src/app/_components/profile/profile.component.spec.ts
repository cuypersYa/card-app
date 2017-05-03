/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppRoutingModule } from '../../app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthenticationService } from '../../_services/authentication.service';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from '../login/login.component';
import { CardComponent } from '../card/card.component';

import { MapToIterablePipe } from '../../_pipes/map-to-iterable.pipe';



describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule,HttpModule,FormsModule ],
      declarations: [ LoginComponent,CardComponent, ProfileComponent, MapToIterablePipe ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },AuthenticationService] 
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
