import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import './rxjs-operators';
import { UserService } from '../services/user.service';

import { GlobalEventsManager } from './../GlobalEventsManager'

@Component({
    selector: 'app',
    template: require('./templates/app.component.html'),
    styles: [ require('./styles/app.component.css') ]
})
export class AppComponent implements OnInit{

    constructor(private  userService : UserService,private router: Router,private eventEmitter: GlobalEventsManager){}

    ngOnInit(){
    }

}