import { Component, Input, OnInit }   from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthenticationService } from '../../_services/authentication.service';
import { Router  } from '@angular/router';
import { User } from '../../_class/user';
import { MapToIterablePipe } from '../../_pipes/map-to-iterable.pipe';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  providers:[MapToIterablePipe]
})
export class ProfileComponent implements OnInit {
  user : User

  model: any =[]
  

  constructor(private authService : AuthenticationService, 
              private router:Router ,
              private mapToIterablePipe: MapToIterablePipe) {
    
    this.user=this.authService.getCurrentUser();
    if (!this.user.loggedin){
      this.router.navigateByUrl('/login')
    }
    let logins=Object.assign(this.mapToIterablePipe.transform(this.user))
    let values=Object.assign(this.mapToIterablePipe.transform(this.user.values));
    let address=Object.assign(this.mapToIterablePipe.transform(this.user.values.address));

    this.setObjectInModel(logins);
    this.setObjectInModel(values);
    this.setObjectInModel(address);
    console.log("this.model: ",this.model);


  }

  ngOnInit() {
    
  }
  setObjectInModel(array){
    
    array.forEach(element => {
      console.log("element: ", element);
      if(typeof element.value !== 'object'){
        if (element.key== 'email' || element.key== 'password'){
          element['validate']=element.key
          element.type=element.key
        }else if (element.type=='boolean'){
          element.type='checkbox'
        }
        element['required']='required'
        this.model.push(element)
      }
    });
   
  }
  
  updateCurrentUser(){
    console.log("before",this.authService.currUser);
    this.model.forEach(element => {
      this.authService.currUser.email= (element.key== 'email' ? element.value : this.authService.currUser.email);
      this.authService.currUser.password= (element.key== 'password' ? element.value : this.authService.currUser.password);
      this.authService.currUser.values.name= (element.key== 'name' ? element.value : this.authService.currUser.values.name);
      this.authService.currUser.values.bio= (element.key== 'bio' ? element.value : this.authService.currUser.values.bio);
      this.authService.currUser.values.points= (element.key== 'points' ? element.value : this.authService.currUser.values.points);
      this.authService.currUser.values.address.street= (element.key== 'street' ? element.value : this.authService.currUser.values.address.street);
      this.authService.currUser.values.address.number= (element.key== 'number' ? element.value : this.authService.currUser.values.address.number);
      this.authService.currUser.values.address.zipcode= (element.key== 'zipcode' ? element.value : this.authService.currUser.values.address.zipcode);
      this.authService.currUser.values.address.city= (element.key== 'city' ? element.value : this.authService.currUser.values.address.city);
    });
    console.log("after",this.authService.currUser);
    localStorage.setItem('currentUser', JSON.stringify(this.authService.currUser));
  }
}
