import { Component ,OnInit} from '@angular/core';


import { ScoreService } from '../services/score.service';


@Component({
    selector: 'dashboard',
    template: require('./templates/dashboard.component.html'),
    styles: [ require('./styles/app.component.css') ]
})
export class DashboardComponent implements OnInit{
    username:string;
    error:string;
    items:Array<any>;
    constructor(private  scoreService : ScoreService){}

    ngOnInit(){
        this.scoreService.getScores().subscribe(
            (data)=> {
                console.log(data);
            },
            error => this.error=error
        )
    }



}