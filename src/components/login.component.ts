// login.component.ts
import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';
import { App } from './app.component'

//services
import { UserService } from './../services/user.service';

//loading-indicator
import {LoadingIndicator, LoadingPage} from './loading-indicator/loading-indicator';

//globaleventmanager for navbar
import { GlobalEventsManager } from './../GlobalEventsManager'

//model
import { User } from './../models/User';
import {OnInit} from "@angular/core";
import {AppComponent} from "./app.component";

@Component({
    selector: 'login',
    template: require('./templates/login.component.html'),
    styles: [ require('./styles/login.component.css') ],
    directives: [LoadingIndicator]
})
export class LoginComponent extends LoadingPage implements OnInit{
    LoggedIn = this.userService.isLoggedIn();
    constructor(private userService: UserService, private router: Router,private eventEmitter : GlobalEventsManager) {
        super(true);
        this.ready();
    }

    ngOnInit(){
        if(this.LoggedIn){
            this.eventEmitter.showNavBar.emit(true);
            this.router.navigate(['Dashboard'])
        };
    }

    onSubmit(event,email, password) {
        this.standby();
        event.preventDefault();
        console.log("submitting");
        this.userService.login(email, password).subscribe((result) => {
            if (result) {
                this.eventEmitter.showNavBar.emit(true);
                this.router.navigate(['Dashboard']);
            }
        });
    }
}