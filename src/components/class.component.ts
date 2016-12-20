import { Component ,OnInit} from '@angular/core';
import {LoadingPage} from "./loading-indicator/loading-indicator";

import { ClassService } from "./../services"

@Component({
    selector: 'class',
    template: require('./templates/class.component.html'),
    styles: [ require('./styles/app.component.css'),require('./styles/class.component.css') ]
})

export class ClassComponent extends LoadingPage implements  OnInit{
    username:string = localStorage.getItem('username');
    classes:Array<any>;
    students:Array<any>;
    newstudents:Array<any>;
    tests:Array<any>
    detail:any;
    teacher:boolean=true;
    constructor(private classService:ClassService){
        super(true);
    }

    ngOnInit(){
        this.standby();
        this.classService.checkifTeacher().subscribe(
            data => {
                this.teacher = data.teacher;
                console.log(this.teacher);
            }
        );
        this.classService.getClasses().subscribe(
            (data) => {
                this.classes=data;
                console.log(this.classes);
                this.ready();
            }
        )
        this.ready();
    }

    viewDetails(c){
        console.log(c);
        this.classService.getStudents(c.id).subscribe( (students) => {
            this.students = students;
            this.detail=c;
        });
        this.classService.getTests(c.id).subscribe( tests => this.tests = tests);

    }

    addStudent(student){
        if(!this.contains(student)){
            this.newstudents.push(student.id);
        }
    }

    private contains(student){
        for(let s of this.students){
            if(s === student)return true;
        }
        return false;
    }

    addStudents(){
        this.classService.addStudent(this.newstudents,this.detail.id);
    }

    addGroup(name){
        this.classService.createClass(name).subscribe(
            (data) => this.classService.getClasses().subscribe(
                (data) => {
                    console.log(data);
                    this.classes=data;
                }
            )
        )
    }



}