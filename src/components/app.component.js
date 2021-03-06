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
require('./rxjs-operators');
var user_service_1 = require('../services/user.service');
var GlobalEventsManager_1 = require('./../GlobalEventsManager');
var AppComponent = (function () {
    function AppComponent(userService, router, eventEmitter) {
        this.userService = userService;
        this.router = router;
        this.eventEmitter = eventEmitter;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: require('./templates/app.component.html'),
            styles: [require('./styles/app.component.css')]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, GlobalEventsManager_1.GlobalEventsManager])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map