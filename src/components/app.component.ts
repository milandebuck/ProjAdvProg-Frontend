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

    userStatus(l : boolean){
        this.loggedIn=l;
        console.log(this.loggedIn)
    }

    logout(){
        this.userService.logout();
        localStorage.removeItem('username');
        this.loggedIn = this.userService.isLoggedIn();
        this.router.navigate(['Login']);
    }

    changeStatus(s : boolean){
        this.loggedIn=s;
    }
}