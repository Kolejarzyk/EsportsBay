import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions} from "@angular/http"
import { Router, ActivatedRoute } from "@angular/router"

import { AuthenticationService } from '../.services/authentication.service';
import { AlertService } from '..//.services/alert.service';

import "rxjs/Rx";
import { MatchService } from '../match/hotmatch/match.service';
import { StreamService } from '../streams/stream.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private matchService: MatchService,
        private stream: StreamService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/homes';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.Username, this.model.Password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
  

}
