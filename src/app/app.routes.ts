import { NgModule }             from '@angular/core';
import { RouterModule, Routes,Router  } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { CardComponent } from './_components/card/card.component';
import { AuthenticationService } from './_services/authentication.service';
import { ProfileComponent } from './_components/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'card', component: CardComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor(router:Router,authService:AuthenticationService) {
  /*router.events.subscribe(event:Event => {
    if(event.constructor.name=== "" ) {
    }
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized
  });*/
  router.events.subscribe((event)=> {
    console.log("event.constructor.name",event.constructor.name);
    if (event.constructor.name === "NavigationEnd" ){
      //router.isActive()
      console.log("is logged in? ",authService.isLoggedIn());
      if ( router.isActive('login',false) && ( router.isActive('',false) && (!authService.isLoggedIn()) )){
        // check if user is logged in
        router.navigateByUrl('/login');
      }
    }
    
  });
}
}