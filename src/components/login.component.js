"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// login.component.ts
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//services
var user_service_1 = require('./../services/user.service');
//loading-indicator
var loading_indicator_1 = require('./loading-indicator/loading-indicator');
//globaleventmanager for navbar
var GlobalEventsManager_1 = require('./../GlobalEventsManager');
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(userService, router, eventEmitter) {
        _super.call(this, true);
        this.userService = userService;
        this.router = router;
        this.eventEmitter = eventEmitter;
        this.LoggedIn = this.userService.isLoggedIn();
        this.ready();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.LoggedIn) {
            this.eventEmitter.showNavBar.emit(true);
            this.router.navigate(['Dashboard']);
        }
        ;
    };
    LoginComponent.prototype.onSubmit = function (event, email, password) {
        var _this = this;
        this.standby();
        event.preventDefault();
        console.log("submitting");
        this.userService.login(email, password).subscribe(function (result) {
            if (result) {
                _this.eventEmitter.showNavBar.emit(true);
                _this.router.navigate(['Dashboard']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: require('./templates/login.component.html'),
            styles: [require('./styles/login.component.css')],
            directives: [loading_indicator_1.LoadingIndicator]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, GlobalEventsManager_1.GlobalEventsManager])
    ], LoginComponent);
    return LoginComponent;
}(loading_indicator_1.LoadingPage));
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map