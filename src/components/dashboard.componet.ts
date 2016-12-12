import { Component ,OnInit} from '@angular/core';


import { ScoreService } from '../services/score.service';
import { UserService } from '../services/user.service';
import {EventEmitter} from "events";
import{ Item } from './../models/Item';
import {LoadingPage} from "./loading-indicator/loading-indicator";

@Component({
    selector: 'dashboard',
    template: require('./templates/dashboard.component.html'),
    styles: [ require('./styles/app.component.css') ]
})
export class DashboardComponent extends LoadingPage implements OnInit {
    username:string;
    error:string;
    items:Array<Item>;
    graphdata:Array<Array<number>>;
    constructor(private  scoreService : ScoreService, private userService : UserService){
        super(true);
        this.ready();
    }

    ngOnInit(){
        this.standby();
        console.log(this.userService.isLoggedIn());
        this.scoreService.getScores().subscribe(
            (data)=> {
                data.forEach((i) => {
                    let data:Array<number>;
                    let item:Item;
                    item.title = i.translations;
                    item.completed = 0;
                    let total = 0;
                    let totalscore=0;
                    i.tests.forEach((test) => {
                        item.completed++;
                        total +=test.max;
                        totalscore += test.score;
                        data.push(test.score);
                    }).then(() => {
                        item.avarage=(totalscore/total)*10;
                        this.graphdata.push(data);
                        this.items.push(item);
                    })
                }).then(() => {
                        this.ready();
                });
            },
            error => this.error=error
        )
    }



}