import { Component ,OnInit} from '@angular/core';


import { ScoreService } from '../services/score.service';
import { UserService } from '../services/user.service';
import {EventEmitter} from "events";
import{ Item } from './../models/Item';
import {LoadingPage} from "./loading-indicator/loading-indicator";
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    template: require('./templates/dashboard.component.html'),
    styles: [ require('./styles/app.component.css') ]
})
export class DashboardComponent extends LoadingPage implements OnInit {
    username:string;
    error:string;
<<<<<<< HEAD
    items:Array<any>;
    graphdata:Array<any>;
    constructor(private  scoreService : ScoreService, private userService : UserService){
=======
    items:Array<Item>;
    graphdata:Array<Array<number>>;
    loggedIn:boolean;
    constructor(private  scoreService : ScoreService, private userService : UserService, private router: Router){
>>>>>>> f68a16e6a344d0e5c5ed9dc04fb99c28e5be1bdd
        super(true);
        this.ready();
    }

    ngOnInit(){
<<<<<<< HEAD
        this.graphdata=[];
        this.items=[];
        this.standby();
=======
>>>>>>> f68a16e6a344d0e5c5ed9dc04fb99c28e5be1bdd
        console.log(this.userService.isLoggedIn());
        this.standby();
        this.scoreService.getScores().subscribe(
            (data)=> {
                data.map((i) => {
                    console.log('processing item');
                    let data:Array<number>;
                    data=[];
                    console.log(data);
                    let item;
                    item={ };
                    console.log(item);
                    item.title = i.translations;
                    item.completed = 0;
                    let total = 0;
                    let totalscore=0;
                    console.log(i.tests);
                    i.tests.map((test) => {
                        console.log('processing data');
                        item.completed++;
                        total +=test.max;
                        totalscore += test.score;
                        data.push(test.score);
                    });
                    item.avarage=(totalscore/total)*10;
                    this.graphdata.push(data);
                    this.items.push(item);

                });
            },
            error => this.error=error
        )
    }



}