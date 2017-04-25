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
              bio:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ',
              points:780
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

});

