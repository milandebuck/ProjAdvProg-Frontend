import { Injectable }     from '@angular/core';
import { Http, Response , Headers,RequestOptions,URLSearchParams} from '@angular/http';
import { Entry } from './../models/Entry';
import { Observable }     from 'rxjs/Observable';

import { CookieService } from './cookie.service';
import { ExtractService } from './extract.service';
@Injectable()
export class EntryService {
    constructor (private http: Http, private cookieService : CookieService, private  extractService: ExtractService) {}

    getEntries (count): Observable<Entry[]> {
        //create auth header
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        //routeparams
        let params = new URLSearchParams();
        params.append('amount',count);
        params.append('token', this.cookieService.getCookie('auth_token'));

        //create options
        let options = new RequestOptions({
            headers:headers,
            search: params
        });

        return this.http.get("http://teammartini.herokuapp.com/Exercise",options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    }

    getScore(answers){
        //add headers
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
        //post answers and return score
            return this.http.post('http://teammartini.herokuapp.com/Exercise', JSON.stringify(answers), options)
                .map(this.extractService.extractData)
                .catch(this.extractService.handleError);
    }

}
