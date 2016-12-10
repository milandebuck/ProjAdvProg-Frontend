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
var CookieService = (function () {
    function CookieService() {
    }
    CookieService.prototype.setCookie = function (token) {
        var d = new Date();
        d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
        document.cookie = "auth_token=" + token + ";expires=" + d.toUTCString() + ";";
    };
    //method to get cookies
    CookieService.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                if (c.substring(name.length, c.length) == "")
                    return false;
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    CookieService.prototype.deleteCookie = function (cname) {
        document.cookie = cname + "=''" + ";expires=-1;";
        //document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    };
    CookieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CookieService);
    return CookieService;
}());
exports.CookieService = CookieService;
//# sourceMappingURL=cookie.service.js.map