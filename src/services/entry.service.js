var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var EntryService = (function () {
    function EntryService(http) {
        this.http = http;
    }
    EntryService.prototype.getEntries = function (count) {
        //create auth header
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('auth_token'));
        //routeparams
        var params = new http_1.URLSearchParams();
        params.append('amount', count);
        //create options
        var options = new http_1.RequestOptions({
            headers: headers,
            search: params
        });
        return this.http.get("http://teammartini.herokuapp.com/Exercise", options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EntryService.prototype.getScore = function (answers) {
        //add headers
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //post answers and return score
        return this.http.post('http://teammartini.herokuapp.com/Excercise', answers, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(res.);
    };
    EntryService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    EntryService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    EntryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EntryService);
    return EntryService;
})();
exports.EntryService = EntryService;
//# sourceMappingURL=entry.service.js.map