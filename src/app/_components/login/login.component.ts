import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import {NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../_class/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  model: any = {};
  newUser: User ;
  loading = false;
  returnUrl: string;
  error= {
    status:false,
    msg:''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log("test", this.model);
  }
  login(){
    this.loading=true;
    console.log("model", this.model.username);
    if (typeof this.model.username !== 'undefined' && typeof this.model.password !== 'undefined'){
       this.authenticationService.login(this.model.username,this.model.password);
       this.loading=false;
       this.router.navigateByUrl('/card');
    }else{
      this.error = {
        status:true,
        msg: 'Wrong credentials'
      }
      this.loading=false;
    }
   
    
    
  }

}
