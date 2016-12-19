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
var core_1 = require('@angular/core');
var loading_indicator_1 = require("./loading-indicator/loading-indicator");
var ClassComponent = (function (_super) {
    __extends(ClassComponent, _super);
    function ClassComponent() {
        _super.call(this, true);
        this.username = localStorage.getItem('username');
    }
    ClassComponent.prototype.ngOnInit = function () {
    };
    ClassComponent = __decorate([
        core_1.Component({
            selector: 'class',
            template: require('./templates/class.component.html'),
            styles: [require('./styles/app.component.css'), require('./styles/class.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], ClassComponent);
    return ClassComponent;
}(loading_indicator_1.LoadingPage));
exports.ClassComponent = ClassComponent;
//# sourceMappingURL=class.component.js.map