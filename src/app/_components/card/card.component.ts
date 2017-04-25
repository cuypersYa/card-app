import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { User } from '../../_class/user';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  user : User;
  constructor(private authService : AuthenticationService) { 
    this.user=this.authService.getCurrentUser();
  }

  ngOnInit() {
    console.log("curentUser",this.authService.getCurrentUser())
    console.info("no user",this.user)
    if (!this.user){
      console.info("no user",this.user)
    }
    //this.user=this.authService.getCurrentUser();
  }

}
