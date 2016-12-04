// exercise.component.ts
import {Component, OnInit } from '@angular/core';

import { Entry } from './../models/Entry';

import { EntryService } from './../services/entry.service';

@Component({
    selector: 'exercise',
    template: require('./templates/exercise.component.html'),
    styles: [ require('./styles/exercise.component.css') ],
})
export class ExerciseComponent implements OnInit{
    entries: Array<Entry>;
    answers: Array<any>;
    curEntry: Entry;
    setup:boolean;
    curlangs:string;
    languages=["NL-EN","EN-NL"];
    private error;
    constructor( private entryService:EntryService){

    };
    private lenght = 10;
    count = 0;
    i = 0;
    private answers = [];
    ngOnInit(){
        console.log('initializing..');
        this.setup =true;
    }

    startExercise(count,language){
        this.curlangs=language;
        this.setup = false;
        this.entries=this.getEntries(this.lenght);
    }

    getEntries(count){
        this.entryService.getEntries()
            .subscribe(
                (entries) => {
                    this.entries=entries;
                    this.curEntry = entries[0];
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
        };

    }

    private correctExercise(){

    }
}