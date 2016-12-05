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
    private error;
    constructor( private entryService:EntryService){
        super(true);
        this.ready();
    };
    private lenght = 10;
    count = 0;
    i = 0;
    private answers = [];
    ngOnInit(){
        console.log('initializing..');
        this.setup =true;
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
                    this.entries=entries;
                    this.curEntry = entries[0];
                    this.ready();
                    console.log("got the entries");
                },
                error => this.error = error
            )
    }

    next(answer){
        if(this.count < this.entries.length){
            this.count ++;
            this.answers.push(answer);
            this.curEntry = this.entries[this.count];
        }
        else {
            alert('test completed');
        }

    }

    getScore(){
        console.log("button stop");
        console.log(this.entryService.getScore(this.answers));
    }

    private correctExercise(){

    }
}