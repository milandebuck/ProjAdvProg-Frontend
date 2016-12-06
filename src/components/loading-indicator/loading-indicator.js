var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by colinjlacy on 4/14/16.
 */
var core_1 = require('@angular/core');
var LoadingIndicator = (function () {
    function LoadingIndicator() {
    }
    LoadingIndicator = __decorate([
        core_1.Component({
            selector: 'loading-indicator',
            template: require('./html/loading-indicator.html'),
            style: [require('./css/loading-indicator.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingIndicator);
    return LoadingIndicator;
})();
exports.LoadingIndicator = LoadingIndicator;
var LoadingPage = (function () {
    function LoadingPage(val) {
        this.loading = val;
    }
    LoadingPage.prototype.standby = function () {
        this.loading = true;
    };
    LoadingPage.prototype.ready = function () {
        this.loading = false;
    };
    return LoadingPage;
})();
exports.LoadingPage = LoadingPage;
//# sourceMappingURL=loading-indicator.js.map