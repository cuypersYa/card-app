import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../_class/user'

@Injectable()
export class AuthenticationService {
  currUser=new User('','',{},false);
  constructor(private http: Http) { }

  login(username: string, password: string) {
     
        /*return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });*/

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
        
          this.currUser = new User(username,password,values,true)
          console.log("set user: ",this.currUser);
          localStorage.setItem('currentUser', JSON.stringify(this.currUser));
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getCurrentUser(){
        if (localStorage.getItem('currentUser') !== null){
            let storageUser=JSON.parse(localStorage.getItem('currentUser'));
            console.log("currUser :",storageUser);
            this.currUser=new User(storageUser.email,storageUser.password,storageUser.values,storageUser.loggedin);
        }
        return this.currUser;
    }
    isLoggedIn(){
        this.currUser=this.getCurrentUser();
        return this.currUser.loggedin;
    }

}
