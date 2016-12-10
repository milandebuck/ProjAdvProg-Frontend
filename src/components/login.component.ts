// login.component.ts
import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';

//services
import { UserService } from './../services/user.service';

//loading-indicator
import {LoadingIndicator, LoadingPage} from './loading-indicator/loading-indicator';

//model
import { User } from './../models/User';
import {OnInit} from "@angular/core";

@Component({
    selector: 'login',
    template: require('./templates/login.component.html'),
    styles: [ require('./styles/login.component.css') ],
    directives: [LoadingIndicator]
})
export class LoginComponent extends LoadingPage implements OnInit{
    LoggedIn = this.userService.isLoggedIn();
    @Output() userStatus = new EventEmitter<boolean>();
    constructor(private userService: UserService, private router: Router) {
        super(true);
        this.ready();
    }

    ngOnInit(){
        this.userStatus.emit(false);
        if(this.LoggedIn)this.router.navigate(['Exercise']);
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