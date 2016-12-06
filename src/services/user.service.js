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
var UserService = (function () {
    function UserService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.loggedIn = false;
        this.loggedIn = !!this.cookieService.getCookie("auth_token");
    }
    UserService.prototype.login = function (username, password) {
        var _this = this;
        console.log("attempting login");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://teammartini.herokuapp.com/login', JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (!res.status) {
                console.log("login succesfull");
                _this.cookieService.setCookie(res.token);
                _this.loggedIn = true;
                return true;
            }
            return false;
        });
    };
    UserService.prototype.logout = function () {
        this.cookieService.deleteCookie();
        console.log(this.cookieService.getCookie('auth_token'));
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, cookie_service_1.CookieService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map