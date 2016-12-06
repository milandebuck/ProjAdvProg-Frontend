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

    constructor(private  userService : UserService,private router: Router){}

    ngOnInit(){
        console.log('logincheck');
        this.loggedIn =this.userService.isLoggedIn();

    }

    logout(){
        this.userService.logout();
        this.router.navigate(['login']);
    }
}