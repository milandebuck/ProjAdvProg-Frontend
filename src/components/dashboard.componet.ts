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
    styles: [ require('./styles/app.component.css'),require('./styles/dashboard.component.css') ]
})
export class DashboardComponent extends LoadingPage implements OnInit {
    username:string;
    error:string;
    items:Array<any>;
    //chart variables
    graphdata:Array<any>;
    labels:Array<number>=[];
    ChartType:string='line';
    ChartLegend:boolean = true;
    username=localStorage.getItem('username');
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
                    console.log('executing');
                    this.processData(data);
                    console.log(this.graphdata);
                    this.ready();
            }, error => this.error=error);
    }

    private processData(data){
        let max:number = 0;
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
            //needed for labals
            if(i.tests.length > max)max= i.tests.length;
            //process testdata + calculate avg
            i.tests.map((test) => {
                console.log('processing data');
                item.completed++;
                total +=test.max;
                totalscore += test.score;
                data.push(test.score);
            });
            item.avarage=Math.round((totalscore/total)*1000)/100;
            this.graphdata.push({data: data, label:item.title});
            this.items.push(item);

        });
        //fill labels array
        while(this.labels.length < max) this.labels.push(this.labels.length);
    }



}