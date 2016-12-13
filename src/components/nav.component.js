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
var router_1 = require('@angular/router');
var GlobalEventsManager_1 = require('./../GlobalEventsManager');
//services
var services_1 = require('./../services');
var NavComponent = (function () {
    function NavComponent(eventEmitter, userService, router) {
        var _this = this;
        this.eventEmitter = eventEmitter;
        this.userService = userService;
        this.router = router;
        this.eventEmitter.showNavBar.subscribe(function (mode) {
            _this.showMenu = mode;
            if (mode)
                _this.username = localStorage.getItem('username');
        });
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.logout = function () {
        this.userService.logout();
        localStorage.removeItem('username');
        this.eventEmitter.showNavBar.emit(false);
        this.router.navigate(['Login']);
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [require('./styles/app.component.css')],
            directives: [],
            template: require('./templates/nav.component.html')
        }), 
        __metadata('design:paramtypes', [GlobalEventsManager_1.GlobalEventsManager, services_1.UserService, router_1.Router])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map