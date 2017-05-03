import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router  } from '@angular/router';
import { User } from '../../_class/user';
import { MapToIterablePipe } from '../../_pipes/map-to-iterable.pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  user : User

  editUser : any
  constructor(private authService : AuthenticationService, 
              private router:Router) { 
    this.user=this.authService.getCurrentUser();
    if (!this.user.loggedin){
      this.router.navigateByUrl('/login')
    }
    
  }

  ngOnInit() {
  }

}
