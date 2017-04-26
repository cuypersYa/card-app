import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Card app';
  showNav=true;
  navigation = [];
  constructor(private router:Router, private location: Location, private authService:AuthenticationService) {
      router.events.subscribe((event)=> {
      console.log("AppComponent event.constructor.name ",event.constructor.name);
      if (event.constructor.name === "NavigationEnd" ){
        if ( this.router.isActive('login',true) ||  this.router.isActive('',true) ){
          this.showNav=false;
        }else{
          this.showNav=true;
        }
      }
      
    });

    for (var i = 0; i < this.router.config.length; i++) {
        var routePath:string = this.router.config[i].path;
        if (routePath !== 'login' && routePath !==''){
           this.navigation.push({url:'/'+routePath, name:routePath});
        }
       console.log(routePath);
    }
    console.log("navigation: ",this.navigation);
  }
  logout(){
    console.log("logout")
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
