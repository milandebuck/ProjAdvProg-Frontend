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
var Observable_1 = require('rxjs/Observable');
var cookie_service_1 = require('./cookie.service');
var UserService = (function () {
    function UserService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.loggedIn = false;
        console.log(this.cookieService.getCookie("auth_token"));
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
                localStorage.setItem('username', username);
                _this.loggedIn = true;
                return true;
            }
            return false;
        });
    };
    UserService.prototype.register = function (username, password, confirmpass) {
        var _this = this;
        console.log("registering");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://teammartini.herokuapp.com/register', JSON.stringify({ username: username, password: password, confirmpass: confirmpass }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (!res.status) {
                console.log("registration succesfull");
                _this.cookieService.setCookie(res.token);
                localStorage.setItem('username', username);
                _this.loggedIn = true;
                return true;
            }
            return false;
        });
    };
    UserService.prototype.getData = function () {
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
            .get('http://teamartini.herokuapp.com/routename', options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        this.cookieService.deleteCookie("auth_token");
        console.log("cookie: " + this.cookieService.getCookie('auth_token'));
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body.data || {};
    };
    UserService.prototype.handleError = function (error) {
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
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, cookie_service_1.CookieService])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map