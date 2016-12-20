// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers,URLSearchParams,RequestOptions } from '@angular/http';

import {CookieService} from  './cookie.service';
import  {ExtractService } from './extract.service';

@Injectable()
export class ClassService {
    constructor(private http: Http, private  cookieService:CookieService,private  extractService : ExtractService) { }

    createClass(name:string){
        console.log(name);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //routeparams
        let params = new URLSearchParams();
        params.append('token',this.cookieService.getCookie('auth_token'));
        //options
        let options = new RequestOptions({
            headers: headers,
            search: params
        });
        console.log(options);
        return this.http
            .post('https://teammartini.herokuapp.com/Group/SaveGroup',JSON.stringify({name: name}),options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }

    addStudent(students,id){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //routeparams
        let params = new URLSearchParams();
        params.append('token',this.cookieService.getCookie('auth_token'));
        params.append('students',students);
        params.append('groupid',id);
        //options
        let options = new RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .post('http://teammartini.herokuapp.com/Group/Addstudents',options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }

    getClasses(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //routeparams
        let params = new URLSearchParams();
        params.append('token',this.cookieService.getCookie('auth_token'));
        //options
        let options = new RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get('http://teammartini.herokuapp.com/GetGroups',options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }

    checkifTeacher(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //routeparams
        let params = new URLSearchParams();
        params.append('token',this.cookieService.getCookie('auth_token'));
        //options
        let options = new RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get('http://teammartini.herokuapp.com/IsTeacher',options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }

    getStudents(id){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //routeparams
        let params = new URLSearchParams();
        params.append('token',this.cookieService.getCookie('auth_token'));
        params.append('groupid',id);
        //options
        let options = new RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get('http://teammartini.herokuapp.com/Group/GetStudents',options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }
}