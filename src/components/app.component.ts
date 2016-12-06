import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import './rxjs-operators';
import { UserService } from '../services/user.service';


@Component({
    selector: 'app',
    template: require('./templates/app.component.html'),
    styles: [ require('./styles/app.component.css') ]
})
export class AppComponent implements OnInit{
    loggedIn:boolean;
    username:string;

    constructor(private  userService : UserService,private router: Router){}

    ngOnInit(){
        console.log('logincheck');
        this.loggedIn =this.userService.isLoggedIn();
        this.username = localStorage.getItem('username');
    }

    logout(){
        this.userService.logout();
        localStorage.removeItem('username');
        this.router.navigate(['login']);
    }
}