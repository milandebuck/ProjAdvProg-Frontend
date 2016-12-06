// exercise.component.ts
import {Component, OnInit } from '@angular/core';

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
    curEntry: Entry;
    setup:boolean;
    curlangs:string;
    languages=["NL-EN","EN-NL"];
    loggedIn:boolean;
    private error;
    constructor( private entryService:EntryService){
        super(true);
        this.loggedIn = true;
        this.ready();
    };
    private lenght = 10;
    count = 0;
    i = 0;
    ngOnInit(){
        console.log('initializing..');
        this.setup =true;
    }

    startExercise(amount,language){
        this.standby();
        this.curlangs=language.selected;
        this.setup = false;
        this.entries=this.getEntries(amount.value);
        this.entries.forEach((entry) => entry.translation = "");
    }

    getEntries(amount){
        this.entryService.getEntries(amount)
            .subscribe(
                (entries) => {
                    this.entries=entries;
                    this.curEntry = entries[0];
                    this.ready();
                    console.log("got the entries");
                },
                error => this.error = error
            )
    }

    next(answer){
        this.count ++;
        if(this.entries[this.count]){
            this.entries[this.count-1].translation = answer
            this.curEntry = this.entries[this.count];
        }
        else {
            console.log('test completed');
            this.getScore();
        }

    }

    getScore(){
        console.log("button stop");
        this.entryService.getScore(this.entries).subscribe(
            (res) => {
                console.log(res);
            },
            error => this.error = error
        );
    }

    private correctExercise(){

    }
}