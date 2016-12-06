// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

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
                    this.loggedIn = true;
                    return true
                }
                return false;
            });
    }

    logout() {
        this.cookieService.deleteCookie();
        console.log(this.cookieService.getCookie('auth_token'))
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

}