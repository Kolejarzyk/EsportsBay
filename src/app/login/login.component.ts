import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions} from "@angular/http"
import { Router, ActivatedRoute } from "@angular/router"

import { AuthenticationService } from '../.services/authentication.service';
import { AlertService } from '..//.services/alert.service';

import "rxjs/Rx";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};  
  loading = false;
  returnUrl: string;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private authenticationService: AuthenticationService, 
    private alertSerivce: AlertService) 
  {}
  ngOnInit() {
    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public login()
  {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password).subscribe(data =>{
      this.router.navigate([this.returnUrl]);
    },
    error => { this.alertSerivce.error(error._body);
    this.loading = false;
    } );
 
  }

  

}
