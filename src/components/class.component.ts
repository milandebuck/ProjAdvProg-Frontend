import { Component ,OnInit} from '@angular/core';
import {LoadingPage} from "./loading-indicator/loading-indicator";

@Component({
    selector: 'class',
    template: require('./templates/class.component.html'),
    styles: [ require('./styles/app.component.css'),require('./styles/class.component.css') ]
})

export class ClassComponent extends LoadingPage implements  OnInit{
    username:string = localStorage.getItem('username');
    classes:Array<any>;
    teacher:boolean=true;
    constructor(){
        super(true);
    }

    ngOnInit(){

    }


}