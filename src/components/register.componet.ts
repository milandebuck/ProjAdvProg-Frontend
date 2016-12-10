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
    selector: 'register',
    template: require('./templates/register.component.html'),
    styles: [ require('./styles/login.component.css') ],
    directives: [LoadingIndicator]
})
export class RegisterComponent extends LoadingPage implements OnInit{
    @Output() userStatus = new EventEmitter<boolean>();
    errorMessage: string;
    constructor(private userService: UserService, private router: Router) {
        super(true);
        this.ready();
    }

    ngOnInit(){
        this.userStatus.emit(false);
    }

    onSubmit(event,email, password,confirmpass) {
        this.standby();
        event.preventDefault();
        console.log("submitting");
        this.userService.register(email, password,confirmpass).subscribe((result) => {
            if (result) {
                this.router.navigate(['Exercise']);
            }
            else{

            }
        });
    }
}