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
var RegisterComponent = (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(userService, router) {
        _super.call(this, true);
        this.userService = userService;
        this.router = router;
        this.userStatus = new core_1.EventEmitter();
        this.ready();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.userStatus.emit(false);
    };
    RegisterComponent.prototype.onSubmit = function (event, email, password, confirmpass) {
        var _this = this;
        this.standby();
        event.preventDefault();
        console.log("submitting");
        this.userService.register(email, password, confirmpass).subscribe(function (result) {
            if (result) {
                _this.router.navigate(['Exercise']);
            }
            else {
            }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RegisterComponent.prototype, "userStatus", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            template: require('./templates/register.component.html'),
            styles: [require('./styles/login.component.css')],
            directives: [loading_indicator_1.LoadingIndicator]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}(loading_indicator_1.LoadingPage));
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.componet.js.map