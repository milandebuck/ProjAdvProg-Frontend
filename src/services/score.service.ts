// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers,URLSearchParams,RequestOptions } from '@angular/http';

import {CookieService} from  './cookie.service';
import { ExtractService } from './extract.service';

@Injectable()
export class ScoreService {

    constructor(private http: Http, private  cookieService:CookieService,private  extractService : ExtractService) { }

    getScores(){
        console.log("getting data");
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
            .get('http://teammartini.herokuapp.com/GetUserResults',options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }


}