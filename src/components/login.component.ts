// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

//services
import { UserService } from './../services/user.service';

//loading-indicator
import {LoadingIndicator, LoadingPage} from './loading-indicator/loading-indicator';

//model
import { User } from './../models/User';

@Component({
    selector: 'login',
    template: require('./templates/login.component.html'),
    styles: [ require('./styles/login.component.css') ],
    directives: [LoadingIndicator]
})
export class LoginComponent extends LoadingPage{
    LoggedIn = this.userService.isLoggedIn();
    constructor(private userService: UserService, private router: Router) {
        super(true);
        this.ready();
    }

    onSubmit(event,email, password) {
        this.standby();
        event.preventDefault();
        console.log("submitting");
        this.userService.login(email, password).subscribe((result) => {
            if (result) {
                this.router.navigate(['Exercise']);
            }
        });
    }
}