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
    items:Array<any>;
    graphdata:Array<any>;
    init=true;
    constructor(private  scoreService : ScoreService, private userService : UserService, private router: Router){
        super(true);
        this.ready();
    }

    ngOnInit(){
        this.graphdata=[];
        this.items=[];
        console.log(this.userService.isLoggedIn());
        this.standby();
        this.scoreService.getScores().subscribe(
            (data)=> {
                if(this.init){
                    this.init=false;
                    console.log('executing');
                    this.processData(data);
                    this.ready();
                }

            }, error => this.error=error);
    }

    private processData(data){
        data.map((i) => {
            console.log(i);
            let data:Array<number>;
            data=[];
            let item;
            item={ };
            item.title = i.translations;
            item.completed = 0;
            let total = 0;
            let totalscore=0;
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
    }



}