"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// user.service.ts
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var cookie_service_1 = require('./cookie.service');
var extract_service_1 = require('./extract.service');
var ScoreService = (function () {
    function ScoreService(http, cookieService, extractService) {
        this.http = http;
        this.cookieService = cookieService;
        this.extractService = extractService;
    }
    ScoreService.prototype.getScores = function () {
        console.log("getting data");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //routeparams
        var params = new http_1.URLSearchParams();
        params.append('token', this.cookieService.getCookie('auth_token'));
        //options
        var options = new http_1.RequestOptions({
            headers: headers,
            search: params
        });
        return this.http
            .get('http://teamartini.herokuapp.com/GetUserResults', options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    };
    ScoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, cookie_service_1.CookieService, extract_service_1.ExtractService])
    ], ScoreService);
    return ScoreService;
}());
exports.ScoreService = ScoreService;
//# sourceMappingURL=score.service.js.map