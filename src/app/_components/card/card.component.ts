import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router  } from '@angular/router';
import { User } from '../../_class/user';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  user : User
  constructor(private authService : AuthenticationService, 
              private router:Router) { 
    this.user=this.authService.getCurrentUser();
    if (!this.user.loggedin){
      console.info("no user in card component",this.user)
      this.router.navigateByUrl('/login')
    }
  }

  ngOnInit() {
    
  }
  doUpdatePoints(newPoints){
    this.user.values.points=this.user.values.points+newPoints;
  }
  

}
