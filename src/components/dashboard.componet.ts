import { Component ,OnInit} from '@angular/core';


import { UserService } from '../services/user.service';


@Component({
    selector: 'dashboard',
    template: require('./templates/dashboard.component.html'),
    styles: [ require('./styles/app.component.css') ]
})
export class DashboardComponent implements OnInit{
    username:string;
    error:string

    constructor(private  userService : UserService){}

    ngOnInit(){
        this.userService.getData().subscribe(
            (data)=> {

            }
            error => this.error=error
        )
    }



}