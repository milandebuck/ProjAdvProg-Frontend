// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers,URLSearchParams,RequestOptions,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import {CookieService} from  './cookie.service';

@Injectable()
export class UserService {
    private loggedIn = false;

    constructor(private http: Http, private  cookieService:CookieService) {
        this.loggedIn = !!this.cookieService.getCookie("auth_token");
    }

    login(username, password) {
        console.log("attempting login");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post('http://teammartini.herokuapp.com/login', JSON.stringify({username, password}), {headers})
            .map(res => res.json())
            .map((res) => {
                if (!res.status) {
                    console.log("login succesfull");
                    this.cookieService.setCookie(res.token);
                    localStorage.setItem('username',username);
                    this.loggedIn = true;
                    return true
                }
                return false;
            });
    }

    register(username,password,confirmpass){
        console.log("registering");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post('http://teammartini.herokuapp.com/register', JSON.stringify({username, password,confirmpass}), {headers})
            .map(res => res.json())
            .map((res) => {
                if (!res.status) {
                    console.log("registration succesfull");
                    this.cookieService.setCookie(res.token);
                    localStorage.setItem('username',username);
                    this.loggedIn = true;
                    return true
                }
                return false;
            });

    }

    getData(){
        console.log("getting data")
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
            .get('http://teamartini.herokuapp.com/routename',options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    logout() {
        this.cookieService.deleteCookie();
        console.log("cookie: " + this.cookieService.getCookie('auth_token'));

        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    private extractData(res: Response) {
        console.log(res);
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}