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
var score_service_1 = require('../services/score.service');
var user_service_1 = require('../services/user.service');
var DashboardComponent = (function () {
    function DashboardComponent(scoreService, userService) {
        this.scoreService = scoreService;
        this.userService = userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.userService.isLoggedIn());
        this.scoreService.getScores().subscribe(function (data) {
            console.log(data);
        }, function (error) { return _this.error = error; });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: require('./templates/dashboard.component.html'),
            styles: [require('./styles/app.component.css')]
        }), 
        __metadata('design:paramtypes', [score_service_1.ScoreService, user_service_1.UserService])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.componet.js.map