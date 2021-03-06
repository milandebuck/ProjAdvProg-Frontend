// exercise.component.ts
import {Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from './../models/Entry';

import { EntryService } from './../services/entry.service';
import {LoadingPage,LoadingIndicator} from "./loading-indicator/loading-indicator";

@Component({
    selector: 'exercise',
    template: require('./templates/exercise.component.html'),
    styles: [ require('./styles/exercise.component.css') ],
    directives:[ LoadingIndicator]
})
export class ExerciseComponent extends LoadingPage implements OnInit{
    entries: Array<Entry>;
    answers: Array<any>;
    score:any;
    curEntry: Entry;
    setup:boolean;
    curlangs:string;
    languages=["NL-EN","EN-NL"];
    private error;
    constructor( private entryService:EntryService,private router: Router){
        super(true);
        this.ready();
    };
    private lenght = 10;
    count = 0;
    i = 0;
    ngOnInit(){
        console.log('initializing..');
        this.setup =true;
        this.score = -1;
    }

    startExercise(amount,language){
        this.standby();
        this.curlangs=language.selected;
        this.setup = false;
        this.entries=this.getEntries(amount.value);
    }

    getEntries(amount){
        this.entryService.getEntries(amount)
            .subscribe(
                (entries) => {
                    entries.forEach((entry) => entry.translation = "");
                    this.entries=entries;
                    this.curEntry = entries[0];
                    this.ready();
                    console.log("got the entries");
                },
                error => this.error = error
            )
    }

    next(answer){
        console.log(answer);
        this.count ++;
        if(this.entries[this.count]){
            this.entries[this.count-1].translation = answer;
            this.curEntry = this.entries[this.count];

        }
        else {
            console.log('test completed');
            this.getScore();
        }

    }

    getScore(){
        this.standby()
        console.log("end of test");
        console.log(this.entries);
        this.entryService.getScore(this.entries).subscribe(
            (res) => {
                this.score = res.score;
                this.ready();
                console.log(res.score);
            },
            error => this.error = error
        );

        this.curEntry = null;
    }

    startNewTest(){
        this.score = -1;
        this.count= 0 ;
        this.setup = true;
    }

    goBack(){
        this.router.navigate(['Dashboard'])
    }
}