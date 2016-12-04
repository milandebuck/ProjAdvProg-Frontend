// exercise.component.ts
import {Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { EntryService } from './../services/entry.service';

@Component({
    selector: 'exercise',
    template: require('./templates/exercise.component.html'),
    styles: [ require('./styles/exercise.component.css') ],
})
export class ExerciseComponent implements OnInit{
    entries: Array<any>;
    answers: Array<any>;
    curEntry: any;
    private error;
    constructor( private entryService:EntryService){

    };
    private lenght = 10;
    count = 0;
    i = 0;
    private answers = [];
    ngOnInit(){
        console.log('initializing..');
        this.entries=this.getEntries(this.lenght);
    }

    getEntries(count){
        this.entryService.getEntries()
            .subscribe(
                (entries) => {
                    this.entries=entries;
                    this.curEntry = entries[0];
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
        alert('test completed')

    }

    private correctExercise(){

    }
}