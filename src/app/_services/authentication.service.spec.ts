/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { HttpModule } from '@angular/http';
import { User } from '../_class/user';


describe('AuthenticationService', () => {
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
              points:0
          }
  let user=new User(username,pass,values,true);


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService],
      imports : [HttpModule]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should create a user', inject([AuthenticationService], (service: AuthenticationService) => {
      service.login(username,pass);
      expect(localStorage.getItem('currentUser')).toEqual(JSON.stringify(user));
  }));
  
  it('should remove user from local storage ', inject([AuthenticationService], (service: AuthenticationService) => {
      service.login(username,pass);
      expect(localStorage.getItem('currentUser')).toEqual(JSON.stringify(user));
      service.logout();
      expect(localStorage.getItem('currentUser')).toEqual(null);
  }));

  it('should get the current User and be logged out', inject([AuthenticationService], (service: AuthenticationService) => {
      const user=service.getCurrentUser();
      expect(user.loggedin).toEqual(false);
      expect(user.email).toEqual('');
      expect(user.password).toEqual('');
  }));
  it('should get the current User to be logged in', inject([AuthenticationService], (service: AuthenticationService) => {
      service.login(username,pass);
      const user=service.getCurrentUser();
      expect(user.loggedin).toEqual(true);
      expect(user.email).toEqual(username);
      expect(user.password).toEqual(pass);
      expect(user.values).toEqual(values);
  }));


});

