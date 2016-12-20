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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var cookie_service_1 = require('./cookie.service');
var extract_service_1 = require('./extract.service');
var SearchService = (function () {
    function SearchService(http, cookieService, extractService) {
        this.http = http;
        this.cookieService = cookieService;
        this.extractService = extractService;
    }
    SearchService.prototype.search = function (term) {
        //create auth header
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //routeparams
        var params = new http_1.URLSearchParams();
        params.append('name', term);
        params.append('token', this.cookieService.getCookie('auth_token'));
        //create options
        var options = new http_1.RequestOptions({
            headers: headers,
            search: params
        });
        return this.http.get("http://teammartini.herokuapp.com/SearchUser", options)
            .map(this.extractService.extractData)
            .catch(this.extractService.handleError);
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, cookie_service_1.CookieService, extract_service_1.ExtractService])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map