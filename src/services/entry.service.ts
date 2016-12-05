import { Injectable }     from '@angular/core';
import { Http, Response , Headers,RequestOptions,URLSearchParams} from '@angular/http';
import { Entry } from './../models/Entry';
import { Observable }     from 'rxjs/Observable';
import {filter} from "rxjs/operator/filter";
@Injectable()
export class EntryService {
    constructor (private http: Http) {}

    getEntries (count): Observable<Entry[]> {
        //create auth header
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',localStorage.getItem('auth_token'));

        //routeparams
        let params = new URLSearchParams();
        params.append('amount',count);

        //create options
        let options = new RequestOptions({
            headers:headers,
            search: params
        })

        return this.http.get("http://teammartini.herokuapp.com/Exercise",options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getScore(answers){
        //post answers and return score
            return this.http.post('http://teammartini.herokuapp.com/Excercise', answers);
    }

    private extractData(res: Response) {
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
