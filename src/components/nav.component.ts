import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GlobalEventsManager} from './../GlobalEventsManager';

//services
import { UserService } from './../services'

@Component({
    selector: 'nav-menu',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./styles/app.component.css')],
    directives: [],
    template: require('./templates/nav.component.html')
})
export class NavComponent implements OnInit {
    public showMenu : boolean;
    username:string;
    constructor(private eventEmitter: GlobalEventsManager,private userService:UserService,private router: Router) {
        this.eventEmitter.showNavBar.subscribe((mode : boolean) =>{
            this.showMenu = mode;
            if(mode) this.username=localStorage.getItem('username')
        });

    }

    ngOnInit() { }

    logout(){
        this.userService.logout();
        localStorage.removeItem('username');
        this.eventEmitter.showNavBar.emit(false);
        this.router.navigate(['Login']);
    }
}